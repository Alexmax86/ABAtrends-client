import './Components.css'
import {Modal} from 'antd-mobile'

export function Panel({children} : {children: React.ReactNode}){
    return (
        <div className="Panel">
            {children}
        </div>        
    )
}

export function ErrorModal(err:string){
    Modal.alert({
        confirmText: 'Ok',
        content: `An error occurred reaching the server. 
        Please retry, if the error persists contact your system administrator. ${err}`,
        closeOnMaskClick: true,
      })
}