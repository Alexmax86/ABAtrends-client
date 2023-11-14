import './filterspanel.css'
import { useState, useEffect, useContext  } from 'react';
import SelectorWidget from '../../../../components/selectorwidget';
import DateWidget from '../../../../components/dateWidget';
import * as Types from '../../dashInterfaces'
import * as Lib from '../../library'

export default function FiltersPanel(props:Types.FiltersPanelPropsType){    
    const [patientsSelection, setPatientsSelection] = useState<number[]>([]);
    const [therapistsSelection, setTherapistsSelection] = useState<number[]>([]);
    const [initialDate, setInitialDate] = useState<Types.DateString | undefined>(undefined);
    const [finalDate, setFinalDate] = useState<Types.DateString | undefined>(undefined);
    
    //Retrieves display string lists to feed dropdown menus
    const patientsDisplayStrings = Lib.actorDataToDisplayStrings(props.filtersContent?.patientsList)
    const therapistsDisplayStrings = Lib.actorDataToDisplayStrings(props.filtersContent?.therapistsList)

    //Define callbacks to be passed to children widgets
    const initialDateCallback = (arg: Types.DateString) => {setInitialDate(arg)}
    const finalDateCallback = (arg: Types.DateString) => {setFinalDate(arg)}
    const patientsSelectionCallBack = (arg:number[]) => (setPatientsSelection(arg))
    const therapistsSelectionCallBack = (arg:number[]) => (setTherapistsSelection(arg))

    
    useEffect(() => {
        if (initialDate != null && finalDate != null){            
            props.setFilterSelectionData({
                patientsIds: patientsSelection, 
                therapistsIds: therapistsSelection, 
                startDate: initialDate, 
                endDate: finalDate })
        }
    }, [patientsSelection, therapistsSelection, initialDate, finalDate])
    
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
            <SelectorWidget data = {patientsDisplayStrings} callBack={patientsSelectionCallBack}></SelectorWidget>
        </span>

        <span>
            <label htmlFor="box">Therapist:</label>
            <SelectorWidget data = {therapistsDisplayStrings} callBack={therapistsSelectionCallBack}></SelectorWidget>
        </span>
    </div>
    )
}