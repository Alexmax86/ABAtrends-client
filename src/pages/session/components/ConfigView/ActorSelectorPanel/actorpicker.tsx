import { useState } from "react"
import { Picker, Button, Space, Toast } from 'antd-mobile'


import { PickerValue, PickerValueExtend } from "antd-mobile/es/components/picker-view"

interface ActorPickerProps{
  visibility : {
    pickerVisible : boolean
    setPickerVisible : Function
  },
  therapists: {label:string, value:number}[],
  patients: {label:string, value:number}[],
  mobileSetActorsSelection: Function
}

export default function ActorPicker(props : ActorPickerProps){
    const {pickerVisible, setPickerVisible} = props.visibility
    
    const [value, setValue] = useState<(PickerValue)[]>(['M'])

    const basicColumns = [
      props.therapists,
      props.patients
      ]

    const handleConfirm = (value: PickerValue[], extend: PickerValueExtend) => {
      const newState = {
        therapist: extend.items[0],
        patient: extend.items[1]
      }
      setValue(value)  
      props.mobileSetActorsSelection(extend.items[0], extend.items[1])}
   return(
    
        <Picker
            columns={basicColumns}
            visible={pickerVisible}            
            value={value}
            onConfirm={handleConfirm}
            onClose={() => {
              setPickerVisible(false)
            }}
            title="Select therapist and patient"
            
        />
    
    
   )
}