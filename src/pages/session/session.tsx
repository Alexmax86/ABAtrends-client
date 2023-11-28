
import { useState, useEffect } from "react"
import {Button, PickerView} from 'antd-mobile'
import dayjs from 'dayjs'
import ActorPicker from "./components/actorpicker"
import * as Lib from '../../helpers/library'
import * as CommonTypes from '../../helpers/CommonTypes'
import "./session.css"




type ActorsSelectionStateProp = {
  therapist: CommonTypes.SelectorItemType | undefined,
  patient:CommonTypes.SelectorItemType | undefined
} | undefined

export default function Session(){
  const [pickerVisible, setPickerVisible] = useState<boolean>(false)
  const [filtersContent, setFiltersContent] = useState<CommonTypes.FiltersContentType>()
  const [actorSelection, setActorsSelection] = useState<ActorsSelectionStateProp>()

  
  useEffect(() => {(async () => setFiltersContent(await Lib.getFiltersContent()))()}, []);
  
  console.log(actorSelection) 
 
    
   return(
    <div className="session-viewport">
      <div className="session-panel">
        <div className="session-panel-date-container">
          <h2>SESSION OF {dayjs().format('DD/MM/YYYY')}</h2>
        </div>

      
      </div>
      
    
      <div className="session-panel">
        <div className="session-panel-internal-container">
          <div className="session-panel-label-container">            
            <p>THERAPIST:</p>
            <p>PATIENT:</p>            
          </div>
          <div className="session-panel-selection-container">
            <p className="session-panel-selection" onClick={() => setPickerVisible(true)}>{actorSelection?.therapist?.label || ""}</p>
            <p className="session-panel-selection" onClick={() => setPickerVisible(true)}>{actorSelection?.patient?.label || ""}</p>
          </div>
        </div>
        
        <ActorPicker 
          visibility= {{pickerVisible, setPickerVisible}}
          therapists= {filtersContent?.therapistsList || []} 
          patients= {filtersContent?.patientsList || []} 
          setActorsSelection={setActorsSelection}
          
          />          
        </div>
      

        <div className="session-panel">
        <div className="session-panel-internal-container">
          <div className="session-panel-label-container">            
            <p>TRAINING:</p>            
          </div>
          <div className="session-panel-selection-container">
            <p className="session-panel-selection" onClick={() => null}>{""}</p>            
          </div>
        </div>
                
        </div>

        <div className="start-button">
          
        <Button block color='success' style={{'--text-color': 'black'}} size='large' shape='rounded'>START</Button>
        </div>
        
      </div>


    
    
   )

}