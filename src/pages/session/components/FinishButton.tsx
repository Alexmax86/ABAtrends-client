import {Button, Modal, Toast} from 'antd-mobile'

export default function FinishButton(){
    const sleep = (time: number) => new Promise(resolve => setTimeout(resolve, time))
    const reject = (time: number) => new Promise(reject => setTimeout(reject, time))

    const confirmModal = () => {
        Modal.confirm({
            content: 'Are you sure you want to finish the session and send the data?',
            confirmText:"Yes",
            cancelText:"No",
            onConfirm: async () => {
              await reject(3000)
              Toast.show({
                icon: 'success',
                content: '提交成功',
                position: 'bottom',
              })
            },
          })
        }
        
    



    return (
        <Button  
            block color='danger' 
            style={{'--text-color': 'black'}} 
            size='small' 
            shape='rounded'
            onClick={confirmModal}
            >
            FINISH
        </Button>
    )
}