import { useState } from "react"
import { Picker, Button, Space, Toast } from 'antd-mobile'
import { ConfigProvider, ErrorBlock } from 'antd-mobile'
import enUS from 'antd-mobile/es/locales/en-US'
import { PickerColumn, PickerValue, PickerValueExtend } from "antd-mobile/es/components/picker-view"
import * as CommonTypes from '../../../../../../helpers/CommonTypes'

interface MobileTrainingPickerProps{
    visibility : {
      pickerVisible : boolean
      setPickerVisible : Function
    },
    trainings: PickerColumn,    
    selectionState: CommonTypes.UserSelectionState    
  }

export default function MobileTrainingPicker(props: MobileTrainingPickerProps){
    const {pickerVisible, setPickerVisible} = props.visibility    
    const [value, setValue] = useState<(PickerValue)[]>(['M'])

      
    const handleConfirm = (value: PickerValue[], extend: PickerValueExtend) => {
        props.selectionState.setUserSelection(
          {
          ...props.selectionState.userSelection,
          Training: extend.items[0] as CommonTypes.SelectorItemType          
          }
        )}

    return(
      <Picker
      columns={[props.trainings]}
      visible={pickerVisible}            
      value={[props.selectionState.userSelection?.Training?.label as PickerValue]}
      onConfirm={handleConfirm}
      onClose={() => {
        setPickerVisible(false)
      }}
      title="Select training"
      
  />
    )

}