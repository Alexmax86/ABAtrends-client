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
    
    const [switchValue, setSwitchValue] = useState('Line');

    
    const onSwitchChange = ({ target: { value } }: RadioChangeEvent) => {        
        setSwitchValue(value)
        props.setChartType(value)
      };  
    
    return(
        <div className="filterPanel">
            <div className='panel-container'>
                <p className='panel-labels'>DATE RANGE</p>
                <PanelDatePicker setFilterSelectionData= {props.setFilterSelectionData} />                
            </div>    
            <div className='panel-container'>
                <p className='panel-labels'>TRAINING TYPE</p>
                <TrainingPicker setFilterSelectionData= {props.setFilterSelectionData}
                    data={props.filtersContent?.trainingTypesList}
                /> 
            </div>

            <div className='panel-container'>
                <p className='panel-labels'>PATIENT(S)</p>
                <PatientPicker setFilterSelectionData= {props.setFilterSelectionData}
                    data={props.filtersContent?.patientsList}
                />

            </div>

            <div className='panel-container'>
                <p className='panel-labels'>THERAPIST(S)</p>
                <TherapistPicker 
                    setFilterSelectionData= {props.setFilterSelectionData}
                    data={props.filtersContent?.therapistsList}
                />
            </div>
            
                
        </div>
    )
}



function PanelDatePicker({setFilterSelectionData}: Types.PanelPickerProps){
    const handleDateChange = (date:any, dateString:any) => {        
        setFilterSelectionData((prevState:any) => (
             {
          ...prevState, 
          startDate: dateString[0],
          endDate: dateString[1] 
        }));
      };

    return(
        <DatePicker.RangePicker 
            onChange={handleDateChange} 
            presets={[
                {label:"Last week", value:[dayjs().subtract(1, 'week'), dayjs() ]},                
                {label:"Last month", value:[dayjs().subtract(1, 'month'), dayjs() ]},
                {label:"Last 3 months", value:[dayjs().subtract(3, 'month'), dayjs() ]},
                {label:"Last 6 months", value:[dayjs().subtract(6, 'month'), dayjs() ]},
                {label:"Last year", value:[dayjs().subtract(12, 'month'), dayjs() ]}            
            ]}
            style={{ width: '100%' }}
            
        /> 
    )
}

function TrainingPicker({setFilterSelectionData, data}: Types.PanelPickerProps){
    const onChange = (value: number) => setFilterSelectionData((prevState:any) => (
        {
     ...prevState, 
     trainingId: value
     
   }));    
    return(
        <Select
                options={data}
                onChange={onChange}    
                style={{ width: '100%' }}
                placeholder="Please select..."
        />
    )
}


function PatientPicker({setFilterSelectionData, data}: Types.PanelPickerProps){
    const onChange = (value: string | string[]) => setFilterSelectionData((prevState:any) => (
        {
     ...prevState, 
     patientsIds: Lib.parseStringArrToInt(value)
     
   }));
    return(
        <Select 
            mode="multiple"                
            style={{ width: '100%' }}
            options={data} 
            placeholder="Please select..." 
            onChange={onChange}  
        />
    )
}

function TherapistPicker({setFilterSelectionData, data}: Types.PanelPickerProps){

    const onChange = (value: string | string[]) => setFilterSelectionData((prevState:any) => (
        {
     ...prevState, 
     therapistsIds: Lib.parseStringArrToInt(value)
     
   }));

    return(
        <Select 
            mode="multiple"                
            style={{ width: '100%' }}
            options={data}
            placeholder="Please select..."
            onChange={onChange}    
        />
    )
}