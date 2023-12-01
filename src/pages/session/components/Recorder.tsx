import {Button, Modal, Toast} from 'antd-mobile'
import './recorder.css'
import FinishButton from './FinishButton'


interface RecorderProps{
    countState : {
        count: number,
        setCount: Function
    },
    confirmModal: () => any
    
}

export default function Recorder({countState, confirmModal}: RecorderProps){

    const increaseCount = () => countState.setCount(countState.count + 1)
    const test = () => console.log("Test")
    

    return (
        <>
            <p className="recorder-count">{countState.count}</p>
            <div className='buttons-holder'>
                <div className="record-buttons">          
                    <Button  
                        block color='success' 
                        style={{'--text-color': 'black'}} 
                        size='large' 
                        shape='rounded'
                        onClick={increaseCount}                    
                        >
                        RECORD
                    </Button>
                </div>
                <div className="record-buttons">
                    <Button  
                        block color='danger' 
                        style={{'--text-color': 'black'}} 
                        size='small' 
                        shape='rounded'
                        onClick={confirmModal}
                        >
                        FINISH
                    </Button>
                </div>
            </div>
            
        </>
    )
}