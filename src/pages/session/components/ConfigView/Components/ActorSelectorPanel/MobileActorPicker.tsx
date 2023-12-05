import { useState } from "react"
import { Picker, Button, Space, Toast } from 'antd-mobile'
import * as CommonTypes from '../../../../../../helpers/CommonTypes'


import { PickerValue, PickerValueExtend } from "antd-mobile/es/components/picker-view"

interface ActorPickerProps{
  visibility : {
    pickerVisible : boolean
    setPickerVisible : Function
  },
  therapists: {label:string, value:number}[],
  patients: {label:string, value:number}[],
  userSelectionState: CommonTypes.UserSelectionState
}

export default function MobileActorPicker(props : ActorPickerProps){
    const {pickerVisible, setPickerVisible} = props.visibility     

    const handleConfirm = (value: PickerValue[], extend: PickerValueExtend) => {
      props.userSelectionState.setUserSelection((prevState:any) => ({
        ...prevState,
        Therapist: extend.items[0],
        Patient: extend.items[1]
      }
      ))
    }

   return(    
        <Picker
            columns={[props.therapists, props.patients]}
            visible={pickerVisible}            
            value={[
              props.userSelectionState.userSelection.Therapist?.label as PickerValue,
              props.userSelectionState.userSelection.Patient?.label as PickerValue
            ]}
            onConfirm={handleConfirm}
            onClose={() => {
              setPickerVisible(false)
            }}
            title="Select therapist and patient"
        />
   )
}