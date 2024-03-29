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

interface IconProp {
    height?: number,
    className: string
}
export function IconDashboard(props:IconProp){
    return (
        <svg
            className={props.className || "svg-icon"}
            xmlns="http://www.w3.org/2000/svg"
            height={`${props.height}em` || '2em'}
            viewBox="0 0 512 512"                  
            >        
            <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
        </svg>
        )
}

export function IconSession(props:IconProp){
    return (
        <svg
            className={props.className || "svg-icon"}
            xmlns="http://www.w3.org/2000/svg"
            height={`${props.height}em` || '2em'}
            viewBox="0 0 512 512"                  
            >        
            <path d="M448 32H361.9l-1 1-127 127h92.1l1-1L453.8 32.3c-1.9-.2-3.8-.3-5.8-.3zm64 128V96c0-15.1-5.3-29.1-14-40l-104 104H512zM294.1 32H201.9l-1 1L73.9 160h92.1l1-1 127-127zM64 32C28.7 32 0 60.7 0 96v64H6.1l1-1 127-127H64zM512 192H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192z" />
        </svg>
        )
}

export function IconHome(props:IconProp){
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            height={`${props.height}em` || '2em'}
            width="18"      
            viewBox="0 0 576 512">
            <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/>
        </svg>
        )
}

