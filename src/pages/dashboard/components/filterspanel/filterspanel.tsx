import './filterspanel.css'
import { useState, useEffect, useContext  } from 'react';
import SelectorWidget from '../../../../components/selectorwidget';
import DateWidget from '../../../../components/dateWidget';
import { DatePicker, Radio, Select } from 'antd';
import type { RadioChangeEvent, SelectProps } from 'antd';
import * as Types from '../../dashInterfaces'
import * as Lib from '../../library'
import dayjs from 'dayjs';
import { parse } from 'path';

export default function FiltersPanel(props:Types.FiltersPanelPropsType){    
    const [patientsSelection, setPatientsSelection] = useState<number[]>([]);
    const [therapistsSelection, setTherapistsSelection] = useState<number[]>([]);
    const [trainingSelection, setTrainingSelection] = useState<number>();
    const [initialDate, setInitialDate] = useState<Types.DateString | undefined>(undefined);
    const [finalDate, setFinalDate] = useState<Types.DateString | undefined>(undefined);
    const [switchValue, setSwitchValue] = useState('Line');
    
    //Retrieves display string lists to feed dropdown menus
    const patientsDisplayStrings = Lib.actorDataToDisplayStrings(props.filtersContent?.patientsList)
    const therapistsDisplayStrings = Lib.actorDataToDisplayStrings(props.filtersContent?.therapistsList)
    const trainingDisplayStrings = Lib.trainingDataToDisplayStrings(props.filtersContent?.trainingTypesList)

    //Define callbacks to be passed to children widgets
    const handlePatientsSelectorChange = (value: string | string[]) => {setPatientsSelection(Lib.parseStringArrToInt(value))};
    const handleTherapistsSelectorChange = (value: string | string[]) => {setTherapistsSelection(Lib.parseStringArrToInt(value))};
    const handleTrainingSelectorChange = (value: number) => {setTrainingSelection(value)}
    const initialDateCallback = (arg: Types.DateString) => {setInitialDate(arg)}
    const finalDateCallback = (arg: Types.DateString) => {setFinalDate(arg)}
    const patientsSelectionCallBack = (arg:number[]) => (setPatientsSelection(arg))
    const therapistsSelectionCallBack = (arg:number[]) => (setTherapistsSelection(arg))
        
    const onSwitchChange = ({ target: { value } }: RadioChangeEvent) => {        
        setSwitchValue(value)
        props.setChartType(value)
      };
    
    //Set state for user selection only if dates not null
      useEffect(() => {
        if (initialDate != null && finalDate != null){            
            props.setFilterSelectionData({
                patientsIds: patientsSelection, 
                therapistsIds: therapistsSelection, 
                trainingId: trainingSelection,
                startDate: initialDate, 
                endDate: finalDate })
        }
    }, [patientsSelection, therapistsSelection, initialDate, finalDate, trainingSelection])

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
                {label:"Last month", value:[dayjs().subtract(1, 'month'), dayjs() ]},
                {label:"Last 3 months", value:[dayjs().subtract(3, 'month'), dayjs() ]},
                {label:"Last 6 months", value:[dayjs().subtract(6, 'month'), dayjs() ]},
                {label:"Last year", value:[dayjs().subtract(12, 'month'), dayjs() ]}
                
                ]}/>
            
        </span>        

        <Radio.Group options={[{label: 'Line', value: 'Line'}, {label: 'Column', value: 'Column'}]} onChange={onSwitchChange} value={switchValue} optionType="button" />
        <Select 
            
            style={{ width: '20%' }}
            onChange={handleTrainingSelectorChange}
            options={trainingDisplayStrings}
            />
            
        <Select
            mode="multiple"
            size={'middle'}
            placeholder="Please select..."          
            onChange={handlePatientsSelectorChange}
            style={{ width: '15%' }}
            options={patientsDisplayStrings}
        />

        <Select
            mode="multiple"
            size={'middle'}
            placeholder="Please select..."          
            onChange={handleTherapistsSelectorChange}
            style={{ width: '15%' }}
            options={therapistsDisplayStrings}
        />
    
        
    </div>
    )
}