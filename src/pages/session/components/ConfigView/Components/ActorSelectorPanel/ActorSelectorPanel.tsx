import { Panel } from "../../../../../../Common/Components/Components"
import { Select } from 'antd';
import * as CommonTypes from '../../../../../../Common/Interfaces'
import { useState, useEffect } from "react"
import MobileActorPicker from "./MobileActorPicker"
import './ActorSelectorPanel.css'

interface SelectorPanelProps{
    filtersContent: CommonTypes.FiltersContentType
    userSelectionState: CommonTypes.UserSelectionState    
}

export default function ActorSelectorPanel(props:SelectorPanelProps){
    const [pickerVisible, setPickerVisible] = useState<boolean>(false) 

    const handleDesktopTherapistSelection = (therapist: CommonTypes.SelectorItemType, options: any) => {      
      const {label, value} = options
      props.userSelectionState.setUserSelection((prevState:any) => ({        
        ...prevState,
        Therapist: {label, value}
      }
      ))  
    }

    const handleDesktopPatientSelection = (patient: CommonTypes.SelectorItemType, options: any) => {      
      const {label, value} = options
      props.userSelectionState.setUserSelection((prevState:any) => ({        
        ...prevState,
        Patient: {label, value}
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
                <div className="mobile-picker-wrapper">
                  <p className="session-panel-selection" onClick={() => setPickerVisible(true)}>{props.userSelectionState.userSelection?.Therapist?.label || ""}</p>
                </div>
                <div className="desktop-picker-wrapper">
                  <Select
                      options= { props.filtersContent?.therapistsList }
                      onChange= { handleDesktopTherapistSelection }    
                      style={{ width: '100%' }}
                      value={props.userSelectionState.userSelection?.Therapist} 
                      placeholder="Please select..."
                      />
                  </div>
                <div className="mobile-picker-wrapper">
                  <p className="session-panel-selection" onClick={() => setPickerVisible(true)}>{props.userSelectionState.userSelection?.Patient?.label || ""}</p>
                </div>
                <div className="desktop-picker-wrapper">
                  <Select
                      options= {props.filtersContent?.patientsList}
                      onChange= { handleDesktopPatientSelection }    
                      style={{ width: '100%' }}
                      value={props.userSelectionState.userSelection?.Patient} 
                      placeholder="Please select..."
                      />
                  </div>
              </div>
            </div>
          </div>
          <MobileActorPicker 
            visibility= {{pickerVisible, setPickerVisible}}
            therapists= {props.filtersContent?.therapistsList || []} 
            patients= {props.filtersContent?.patientsList || []} 
            userSelectionState={props.userSelectionState}
          />          
        </Panel>
      </div>
    )
}
