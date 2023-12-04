import { Panel } from "../../../../../components/Common/Components"
import * as CommonTypes from '../../../../../helpers/CommonTypes'
import { useState, useEffect } from "react"
import ActorPicker from "./actorpicker"

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
