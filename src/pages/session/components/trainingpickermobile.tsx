import { useState } from "react"
import { Picker, Button, Space, Toast } from 'antd-mobile'
import { ConfigProvider, ErrorBlock } from 'antd-mobile'
import enUS from 'antd-mobile/es/locales/en-US'
import { PickerValue, PickerValueExtend } from "antd-mobile/es/components/picker-view"

interface MobileTrainingPickerProps{
    visibility : {
      pickerVisible : boolean
      setPickerVisible : Function
    },
    trainings: {label:string, value:number}[],    
    setActorsSelection: Function
  }

export default function MobileTrainingPicker(props: MobileTrainingPickerProps){
    const {pickerVisible, setPickerVisible} = props.visibility    
    const [value, setValue] = useState<(PickerValue)[]>(['M'])

    const basicColumn = [props.trainings]
    const handleConfirm = (value: PickerValue[], extend: PickerValueExtend) => {
        const newState = {
          therapist: extend.items[0],
          patient: extend.items[1]
        }
        setValue(value)  
        props.setActorsSelection(newState)}
    return(
        <p>asdasd</p>
    )

}