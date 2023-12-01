import {Button, Modal, Toast} from 'antd-mobile'


const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))
const reject = (time: number) => new Promise(reject => setTimeout(reject, time))

export const confirmModal = () => {
        Modal.confirm({
            content: 'Are you sure you want to finish the session and send the data?',
            confirmText:"Yes",
            cancelText:"No",
            onConfirm: async () => {
              await reject(3000)
              Toast.show({
                icon: 'success',
                content: 'Data sent successfully',
                position: 'bottom',
              })
            },
          })
        }