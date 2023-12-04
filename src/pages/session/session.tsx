import { useState, useEffect } from "react"
import {Button, Modal, Toast} from 'antd-mobile'
import dayjs from 'dayjs'
import * as CommonTypes from '../../helpers/CommonTypes'
import "./session.css"
import ConfigView from "./components/ConfigView/ConfigView"
import Recorder from "./components/Recorder/Recorder"
import {recordData} from "../../helpers/Apicaller"
import {Panel} from '../../components/Common/Components'



export default function Session(){

    const [userSelection, setUserSelection] = useState<CommonTypes.SelectionStateType>()
    const [selectionComplete, setSelectionComplete] = useState<boolean>(false)
    const [count, setCount] = useState<number>(0)

    const dateString = dayjs().format('YYYY-MM-DD')
    
    //Preparing data object to be sent
    const jsonObject:CommonTypes.Api_SessionData = {
        therapist_id: userSelection?.Therapist?.value as number,
        patient_id: userSelection?.Patient?.value as number,
        training_type_id: userSelection?.Training?.value as number,
        date: dateString as CommonTypes.DateString,
        responses: count
    }

    
    
    const confirmModal = () => {
        Modal.confirm({
            content: 'Are you sure you want to finish the session and send the data?',
            confirmText:"Yes",
            cancelText:"No",
            onConfirm: async () => {
                console.log("Modal code")
              try{
                await recordData(jsonObject)
                Toast.show({
                    icon: 'success',
                    content: 'Data sent successfully',
                    position: 'bottom',
                  })
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
    

    return(
        <div className="session-viewport">
            
            <div className="session-panel-outer">
                <Panel>                
                    <div className="session-panel-inner-container">
                        <h2 className="date-header">SESSION OF {dateString}</h2>
                            {selectionComplete 
                            && <div className="info">
                                    <div className="info-item">
                                        <span className="info-label">Therapist:</span>
                                        <span className="info-value">John Doe</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label">Patient:</span>
                                        <span className="info-value">Alex Johnson</span>
                                    </div>
                                    
                                    <span className="info-item-training">Objects visual recognition</span>
                                    
                                </div>}
                    </div>      
                </Panel>
            </div>
            
            {selectionComplete 
                ? (<Recorder countState={{count, setCount}} confirmModal={confirmModal}/>) 
                : (<ConfigView  userSelectionState={{userSelection, setUserSelection}} setSelectionComplete={setSelectionComplete}/>)
            }
        </div>
    )
}