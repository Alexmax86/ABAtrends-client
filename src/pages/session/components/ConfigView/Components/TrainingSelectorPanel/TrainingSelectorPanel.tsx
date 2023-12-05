import { Panel } from "../../../../../../components/Common/Components"

import * as CommonTypes from '../../../../../../helpers/CommonTypes'
import { useState, useEffect } from "react"
import MobileTrainingPicker from "./MobileTrainingPicker"
import './TrainingSelectorPanel.css'
import { Select } from 'antd';
import { PickerValue } from "antd-mobile/es/components/picker-view"

//***************************************************************************************************************************/
//This component handle the selection of the training in desktop and mobile. Uses a sub component to handle the mobile version
//***************************************************************************************************************************/
interface SelectorPanelProps{
    filtersContent: CommonTypes.FiltersContentType
    userSelectionState: CommonTypes.UserSelectionState    
  }
export default function TrainingSelectorPanel(props: SelectorPanelProps){
    const [pickerVisible, setPickerVisible] = useState<boolean>(false)
  
    const setTrainingSelection = (training: PickerValue, options: any) => {
      const {label, value} = options
      props.userSelectionState.setUserSelection((prevState:any) => ({
        ...prevState,
        Training: {label, value}      
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
                      selectionState={props.userSelectionState}
                    />
                </div>
                <div className="DkPickerWrapper">
                    <Select
                    options= {props.filtersContent?.trainingTypesList}
                    onChange= {setTrainingSelection}    
                    style={{ width: '100%' }}
                    value={props.userSelectionState.userSelection?.Training?.label} 
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