import { useState } from "react"
import { Picker, Button, Space, Toast } from 'antd-mobile'
import { ConfigProvider, ErrorBlock } from 'antd-mobile'
import enUS from 'antd-mobile/es/locales/en-US'
import { PickerValue, PickerValueExtend } from "antd-mobile/es/components/picker-view"

interface MobileTrainingPickerProps{
    visibility : {
      mobileTPickerVisible : boolean
      setMobileTPickerVisible : Function
    },
    trainings: {label:string, value:number}[],    
    setTrainingSelection: Function
  }

export default function MobileTrainingPicker(props: MobileTrainingPickerProps){
    const {mobileTPickerVisible, setMobileTPickerVisible} = props.visibility    
    const [value, setValue] = useState<(PickerValue)[]>(['M'])

    const basicColumn = [props.trainings]
    const handleConfirm = (value: PickerValue[], extend: PickerValueExtend) => {
        
        setValue(value)  
        props.setTrainingSelection(extend.items[0])}
    return(
      <Picker
      columns={basicColumn}
      visible={mobileTPickerVisible}            
      value={value}
      onConfirm={handleConfirm}
      onClose={() => {
        setMobileTPickerVisible(false)
      }}
      title="Select training"
      
  />
    )

}