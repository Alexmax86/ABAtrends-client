import { useState, useEffect } from "react"
import {Button, Modal, Toast} from 'antd-mobile'
import dayjs from 'dayjs'
import * as CommonTypes from '../../Common/Interfaces'
import "./session.css"
import ConfigView from "./components/ConfigView/ConfigView"
import Recorder from "./components/Recorder/Recorder"
import {recordData} from "../../Common/Apicaller"
import {Panel} from '../../Common/Components/Components'
import { ConfirmationModal } from "./components/ConfirmationModal/Confirmationmodal"

const emptyStateObj = {
    Therapist:  null,
    Patient:  null,
    Training:  null
}


export default function Session(){

    const [userSelection, setUserSelection] = useState<CommonTypes.SelectionStateType>(emptyStateObj)
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

    const confirmModal = () => ConfirmationModal(jsonObject) 

    return(
        <div className={selectionComplete ? 'session-viewport-record' : 'session-viewport-config'} >
            
            <div className="session-panel-outer">
                <Panel>                
                    <div className="session-panel-inner-container">
                        <h2 className="date-header">SESSION OF {dateString}</h2>
                            {selectionComplete 
                            && <div className="info">
                                    <div className="info-item">
                                        <span className="info-label">Therapist:</span>
                                        <span className="info-value">{userSelection.Therapist?.label}</span>
                                    </div>
                                    <div className="info-item">
                                        <span className="info-label">Patient:</span>
                                        <span className="info-value">{userSelection.Patient?.label}</span>
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