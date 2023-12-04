import { useState, useEffect } from "react"
import {Button, Picker} from 'antd-mobile'
import dayjs from 'dayjs'
import ActorPicker from "../actorpicker"
import MobileTrainingPicker from "./MobileTrainingPicker"
import * as Lib from '../../../../helpers/library'
import * as CommonTypes from '../../../../helpers/CommonTypes'
import {Panel} from '../../../../components/Common/Components'

import './ConfigView.css'



interface ConfigViewProps{
  userSelectionState: CommonTypes.UserSelectionState
  setSelectionComplete: Function
}

export default function ConfigView({userSelectionState, setSelectionComplete}: ConfigViewProps){
    //Contain information of dropdowns
    const [filtersContent, setFiltersContent] = useState<CommonTypes.FiltersContentType>()    
        
    //Visibility of mobile widgets
    const [startIsDisabled, setStartIsDisabled] = useState<boolean>(true)
    
    useEffect(() => {(async () => setFiltersContent(await Lib.getFiltersContent()))()}, []);

      const selectionComplete = 
        userSelectionState.userSelection?.Patient!==undefined 
        && userSelectionState.userSelection?.Therapist!==undefined
        && userSelectionState.userSelection?.Training!==undefined 

      const handleStart = () => setSelectionComplete(true)
    return(
      <>
        <ActorSelectorPanel filtersContent={filtersContent} userSelectionState={userSelectionState}/>
        <TrainingSelectorPanel filtersContent={filtersContent} userSelectionState={userSelectionState}/>
        
        <div className="record-buttons">          
          <Button disabled={!selectionComplete} 
            block color='success' 
            style={{'--text-color': 'black'}} 
            size='large' 
            shape='rounded'
            onClick={handleStart}
            >START</Button>
        </div>
        
      </>
    )

}




interface SelectorPanelProps{
    filtersContent: CommonTypes.FiltersContentType
    userSelectionState: CommonTypes.UserSelectionState    
}

function ActorSelectorPanel(props:SelectorPanelProps){
    const [pickerVisible, setPickerVisible] = useState<boolean>(false) 

    const mobileSetActorsSelection = (therapist: CommonTypes.SelectorItemType, patient:CommonTypes.SelectorItemType) => {
        props.userSelectionState.setUserSelection((prevState:any) => ({
          ...prevState,
          Therapist: therapist,
          Patient: patient
        }
        ))
    }
    
    return (
    <div className="session-panel-outer">
        <Panel>
          <div className="session-panel-inner-container">
            <div className="session-panel-tpselector-container">
              <div className="session-panel-label-container">            
                <p>THERAPIST:</p>
                <p>PATIENT:</p>            
              </div>
              <div className="session-panel-selection-container">
                <p className="session-panel-selection" onClick={() => setPickerVisible(true)}>{props.userSelectionState.userSelection?.Therapist?.label || ""}</p>
                <p className="session-panel-selection" onClick={() => setPickerVisible(true)}>{props.userSelectionState.userSelection?.Patient?.label || ""}</p>
              </div>
            </div>
          </div>
          <ActorPicker 
            visibility= {{pickerVisible, setPickerVisible}}
            therapists= {props.filtersContent?.therapistsList || []} 
            patients= {props.filtersContent?.patientsList || []} 
            mobileSetActorsSelection={mobileSetActorsSelection}
          />          
        </Panel>
      </div>
    )
}

function TrainingSelectorPanel(props: SelectorPanelProps){
  const [pickerVisible, setPickerVisible] = useState<boolean>(false)

  const setTrainingSelection = (training: CommonTypes.SelectorItemType) => {
    props.userSelectionState.setUserSelection((prevState:any) => ({
      ...prevState,
      Training: training      
    }
    ))

}
  return (
    <div className="session-panel-outer">
      <Panel>
        <div className="session-panel-inner-container">
          <div className="session-panel-tselector-container">
            <div className="session-panel-label-container">            
              <p>TRAINING:</p>            
            </div>
            <div className="session-panel-selection-container">
              <p className="session-panel-selection" onClick={() => setPickerVisible(true)}>{props.userSelectionState.userSelection?.Training?.label}</p>            
            </div>
            <MobileTrainingPicker 
              visibility={{pickerVisible, setPickerVisible}}
              trainings={props.filtersContent?.trainingTypesList || []}
              setTrainingSelection={setTrainingSelection} 
            />
            </div>
        </div>                
      </Panel>
    </div>
  )
}