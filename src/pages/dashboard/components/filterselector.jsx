import './filterselector.css'
import { useState, useEffect, useContext  } from 'react';
import Selectorwidget from '../../../components/selectorwidget';
import { filtersContext } from '../dashcontexts';
import DateWidget from '../../../components/dateWidget';

export default function Filterselector({filterPopulationData, setFilterSelectionData}){
    const [data, setData] = useState([]);
    const [patientSelection, setPatientSelection] = useState([]);
    const [initialDate, setInitialDate] = useState(null)
    const [finalDate, setFinalDate] = useState(null)
        
    const patientList = filterPopulationData.map(obj => {
        const { id, name, surname } = obj;
        const displayString = `${name} ${surname}`;
        return { id, displayString };})
       
    const initialDateCallback = (arg) => {setInitialDate(arg)}
    const finalDateCallback = (arg) => {setFinalDate(arg)}
    const patientSelectionCallBack = (arg) => (setPatientSelection(arg))

    useEffect(() => {
        if (patientSelection.length > 0 && initialDate != null && finalDate != null){
            console.log("useeffect")
            setFilterSelectionData({id: patientSelection, startDate: initialDate, endDate: finalDate})
        }
    }, [patientSelection, initialDate, finalDate])
    
    return(
    <div className="filterPanel">
        <span>
            <label htmlFor="initial-date"> Initial date:</label>
            <DateWidget callBack={initialDateCallback} name="initial-date"/>
        </span>
        <span>
            <label htmlFor="final-date"> Final date:</label>
            <DateWidget callBack={finalDateCallback}  name="initial-date"/>
        </span>

        <span>
            <label htmlFor="box">Patient:</label>
            <Selectorwidget list = {patientList} callBack={patientSelectionCallBack}></Selectorwidget>
        </span>
        
    </div>
    )
}