import './filterspanel.css'
import { useState } from 'react';
import { DatePicker, Select } from 'antd';

import type { RadioChangeEvent, SelectProps  } from 'antd';
import * as Types from '../../DashInterfaces'
import * as Lib from '../../../../Common/Library'

import dayjs from 'dayjs';
import { parse } from 'path';
import * as CommonTypes from './../../../../Common/Interfaces';

export type FiltersPanelPropsType = {
    filtersContent?: Types.FiltersContentType,
    dashUserSelectionState: {
        dashUserSelection: Types.DashUserSelection,
        setUserSelection: Function
    },
    setChartType: (arg:Types.ChartType)=> void;
} 

export default function FiltersPanel(props:FiltersPanelPropsType){    
    
    const [switchValue, setSwitchValue] = useState('Line');

    
    const onSwitchChange = ({ target: { value } }: RadioChangeEvent) => {        
        setSwitchValue(value)
        props.setChartType(value)
      };  
    
    return(
        <div className="filterPanel">
            <div className='panel-container'>
                <p className='panel-labels'>DATE RANGE</p>
                <PanelDatePicker dashUserSelectionState= {props.dashUserSelectionState} />                
            </div>    
            <div className='panel-container'>
                <p className='panel-labels'>TRAINING TYPE</p>
                <TrainingPicker dashUserSelectionState= {props.dashUserSelectionState}
                    data={props.filtersContent?.trainingTypesList}
                /> 
            </div>

            <div className='panel-container'>
                <p className='panel-labels'>THERAPIST(S)</p>
                <TherapistPicker 
                    dashUserSelectionState= {props.dashUserSelectionState}
                    data={props.filtersContent?.therapistsList}
                />
            </div>

            <div className='panel-container'>
                <p className='panel-labels'>PATIENT(S)</p>
                <PatientPicker dashUserSelectionState= {props.dashUserSelectionState}
                    data={props.filtersContent?.patientsList}
                />

            </div>
        </div>
    )
}

export interface PanelPickerProps{
    dashUserSelectionState: {
        dashUserSelection: Types.DashUserSelection,
        setUserSelection: Function
    },
    data?: Types.SelectorDataType
}

function PanelDatePicker({dashUserSelectionState}: PanelPickerProps){
    const handleDateChange = (date:any, dateString:any) => {        
        dashUserSelectionState.setUserSelection((prevState:any) => (
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

function TrainingPicker({dashUserSelectionState, data}: PanelPickerProps){
    const onChange = (value: number) => dashUserSelectionState.setUserSelection((prevState:any) => (
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


function PatientPicker({dashUserSelectionState, data}: PanelPickerProps){

    
    const onChange = (patient: CommonTypes.SelectorItemType, options: any) => 
    {
        dashUserSelectionState.setUserSelection((prevState:any) => (        
            {
         ...prevState, 
         patients: options
       }));       
    }
        
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


function TherapistPicker({dashUserSelectionState, data}: PanelPickerProps){

    const onChange = (therapist: CommonTypes.SelectorItemType, options: any) => 
    {
        dashUserSelectionState.setUserSelection((prevState:any) => (        
            {
         ...prevState, 
         therapists: options
       }));       
    }

    const values: SelectProps["value"] = dashUserSelectionState.dashUserSelection.therapists
    const defaultValue: SelectProps["defaultValue"] = data;
    return(
        <Select 
            mode="multiple"                
            style={{ width: '100%' }}
            options={data}
            placeholder="Please select..."
            onChange={onChange}            
            value= {values ? values : []}                        
        />
    )
}