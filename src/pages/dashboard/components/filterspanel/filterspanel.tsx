import './filterspanel.css'
import { useState, useEffect, useContext  } from 'react';
import SelectorWidget from '../../../../components/selectorwidget';
import DateWidget from '../../../../components/dateWidget';
import { DatePicker, Button } from 'antd';
import * as Types from '../../dashInterfaces'
import * as Lib from '../../library'
import dayjs from 'dayjs';

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

    const handleDateChange = (date:any, dateString:any) => {
        // Update the state in the parent component with the selected date
        
        setInitialDate(dateString[0]);
        setFinalDate(dateString[1]);
        
      }; 
    
    return(
    <div className="filterPanel">
        <span>
            <DatePicker.RangePicker onChange={handleDateChange} 
            presets={[
                {label:"Last week", value:[dayjs().subtract(1, 'week'), dayjs() ]},
                {label:"Last 2 weeks", value:[dayjs().subtract(2, 'week'), dayjs() ]},
                {label:"Last month", value:[dayjs().subtract(1, 'month'), dayjs() ]},
                {label:"Last 6 months", value:[dayjs().subtract(6, 'month'), dayjs() ]},
                {label:"Last year", value:[dayjs().subtract(12, 'month'), dayjs() ]}
                
                ]}/>
            
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