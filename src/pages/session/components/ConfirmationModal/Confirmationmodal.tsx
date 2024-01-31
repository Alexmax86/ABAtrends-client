import {Button, Modal, Toast} from 'antd-mobile'
import * as CommonTypes from '../../../../Common/Interfaces'
import {recordData} from "../../../../Common/Apicaller"

export const ConfirmationModal = (jsonObject:CommonTypes.Api_SessionData, resetStates:Function) => {
  const emptyStateObj = {
    Therapist:  null,
    Patient:  null,
    Training:  null
}
  Modal.confirm({
      content: 'Are you sure you want to finish the session and send the data?',
      confirmText:"Yes",
      cancelText:"No",
      onConfirm: async () => {                
        try{
          await recordData(jsonObject)
          Toast.show({
              icon: 'success',
              content: 'Data sent successfully',
              position: 'bottom',
            })
          resetStates()
        }
        catch(err){
          Modal.alert({
              confirmText: 'Ok',
              content: `An error occurred and the data is not saved. 
              Please retry, if the error persists contact your system administrator. ${err}`,
              closeOnMaskClick: true,
            })
        }
      },
    })
  }