import { Panel } from "../../../../../../components/Common/Components"

import * as CommonTypes from '../../../../../../helpers/CommonTypes'
import { useState, useEffect } from "react"
import MobileTrainingPicker from "./MobileTrainingPicker"
import './TrainingSelectorPanel.css'
import { Select } from 'antd';


interface SelectorPanelProps{
    filtersContent: CommonTypes.FiltersContentType
    userSelectionState: CommonTypes.UserSelectionState    
  }
export default function TrainingSelectorPanel(props: SelectorPanelProps){
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
                <div className="mtPickerWrapper">                
                    <p className="session-panel-selection" onClick={() => setPickerVisible(true)}>{props.userSelectionState.userSelection?.Training?.label}</p>            
                    <MobileTrainingPicker 
                    visibility={{pickerVisible, setPickerVisible}}
                    trainings={props.filtersContent?.trainingTypesList || []}
                    setTrainingSelection={setTrainingSelection}/>
                </div>
                <div className="DkPickerWrapper">
                    <Select
                    options= {props.filtersContent?.trainingTypesList}
                    onChange= { ()=> {return undefined} }    
                    style={{ width: '100%' }}
                    placeholder="Please select..."
                    />
                </div>                
              </div>

                              
                
                
              
              </div>
          </div>                
        </Panel>
      </div>
    )
  }