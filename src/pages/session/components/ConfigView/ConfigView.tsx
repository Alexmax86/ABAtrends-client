import { useState, useEffect } from "react"
import {Button, Picker} from 'antd-mobile'
import MobileTrainingPicker from "./Components/TrainingSelectorPanel/MobileTrainingPicker"
import * as Lib from '../../../../Common/Library'
import * as CommonTypes from '../../../../Common/Interfaces'
import ActorSelectorPanel from "./Components/ActorSelectorPanel/ActorSelectorPanel"
import TrainingSelectorPanel from "./Components/TrainingSelectorPanel/TrainingSelectorPanel"
import { ErrorModal } from "../../../../Common/Components/Components"
import './ConfigView.css'


//*****************************************************************************/
//This component handle the selection of the choices before starting a session
//*****************************************************************************/ */

interface ConfigViewProps{
  userSelectionState: CommonTypes.UserSelectionState
  setSelectionComplete: Function
}

export default function ConfigView({userSelectionState, setSelectionComplete}: ConfigViewProps){
  //Contain information of dropdowns
  const [filtersContent, setFiltersContent] = useState<CommonTypes.FiltersContentType>()    
      
  //Visibility of mobile widgets
  const [startIsDisabled, setStartIsDisabled] = useState<boolean>(true)
  
  useEffect(
    () => {(async () => {
      try{
        setFiltersContent(await Lib.getFiltersContent())
      }
      catch(err){
        ErrorModal(err as string)
      }
    }    
    )()}, []);

  const selectionComplete = 
    userSelectionState.userSelection?.Patient!==null 
    && userSelectionState.userSelection?.Therapist!==null
    && userSelectionState.userSelection?.Training!==null 

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
          onClick={handleStart}>
            START
          </Button>
      </div>
      
    </>
  )

}


