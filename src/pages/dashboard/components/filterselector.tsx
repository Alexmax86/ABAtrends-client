import './filterselector.css'
import { useState, useEffect, useContext  } from 'react';
//import Selectorwidget from '../../../components/selectorwidget';
import DateWidget from '../../../components/dateWidget';
import * as Types from '../dashInterfaces'

export default function Filterselector(props:Types.FilterSelectorPropsType){
    const [data, setData] = useState([]);
    const [patientSelection, setPatientSelection] = useState([]);
    const [initialDate, setInitialDate] = useState(null)
    const [finalDate, setFinalDate] = useState(null)
        
    const patientList = props.filtersContent?.patientsList.map(obj => {
        const { id, name, surname } = obj;
        const displayString = `${name} ${surname}`;
        return { id, displayString };})
       
    const initialDateCallback = (arg:any) => {setInitialDate(arg)}
    const finalDateCallback = (arg:any) => {setFinalDate(arg)}
    const patientSelectionCallBack = (arg:any) => (setPatientSelection(arg))

    /*
    useEffect(() => {
        if (initialDate != null && finalDate != null){
            console.log("useeffect")
            setFilterSelectionData({id: patientSelection, startDate: initialDate, endDate: finalDate})
        }
    }, [patientSelection, initialDate, finalDate])
    */
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
            {/*<Selectorwidget list = {patientList} callBack={patientSelectionCallBack}></Selectorwidget>*/}
        </span>
    </div>
    )
}