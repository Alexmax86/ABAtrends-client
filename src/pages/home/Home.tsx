import React from 'react';
import { Space, Table } from 'antd';
import { Tabs } from 'antd-mobile'
import type { ColumnsType } from 'antd/es/table';
import { Panel } from '../../Common/Components/Components';
import { useState, useEffect } from "react"
import './Home.css'
import {getRawEntities} from './../../Common/Apicaller'
import * as CommonTypes from '../../Common/Interfaces'
import { ErrorModal } from '../../Common/Components/Components';

function Home(){
  const [tablesContent, setTableContent] = useState<CommonTypes.RawEntities>()

useEffect(() =>{
  const fetchData = async () => {
    try{
      const fetchedTablesContent = await getRawEntities();
      setTableContent(fetchedTablesContent)
    }catch(err){
      ErrorModal(err as string)
    }
  }
  fetchData()
 }, [])

    return(  
      <div className='home-view'>
        <Panel>
          <div className='table-wrapper'>
            <Tabs className= "andtm-tab">
              <Tabs.Tab title='Therapists' key='therapists'>
                {<TherapistTable therapists={tablesContent?.Therapists}/>}
              </Tabs.Tab>
              <Tabs.Tab title='Patients' key='patients'>
              {<PatientsTable patients={tablesContent?.Patients}/>}
              </Tabs.Tab>
              <Tabs.Tab title='Trainings' key='trainings'>
              {<TrainingsTable trainings={tablesContent?.Trainings}/>}
              </Tabs.Tab>
            </Tabs>
          </div>
        </Panel>  
      </div>
  )  
}

interface ActorTablesDataType {
  key: number;
  name: string;
  surname: string;
  age: number;
  email: string;  
}
const columns: ColumnsType<ActorTablesDataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',    
  },
  {
    title: 'Surname',
    dataIndex: 'surname',
    key: 'surname',    
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
  }
];
/*
const data: ActorTablesDataType[] = [
  {
    key: 1,
    name: 'John',
    surname: 'Brown',
    age: 32,
    email: 'JohnBrown@example.com'    
  },  
  {
    key: 2,
    name: 'James',
    surname: 'Brown',
    age: 12,
    email: 'JamesBrown@example.com'    
  },  
];
*/


function TherapistTable({therapists}: {therapists:CommonTypes.RawActorData[] | undefined}){
  //Switching ID property for Keys property as it's required by table widget
  const TherapistsData = therapists?.map(obj => {
    const { id, ...rest } = obj; 
    return { ...rest, key: id }; 
  }) || undefined;
  return(
    <div className='tab-wrapper'>
      <Table 
          virtual
          columns={columns} 
          dataSource={TherapistsData} 
      />
  </div>
  )
}

function PatientsTable({patients}: {patients:CommonTypes.RawActorData[] | undefined}){
  //Switching ID property for Keys property as it's required by table widget
  const PatientsData = patients?.map(obj => {
    const { id, ...rest } = obj; 
    return { ...rest, key: id }; 
  }) || undefined;
  return(
    <div className='tab-wrapper'>
      <Table 
          virtual
          columns={columns} 
          dataSource={PatientsData} 
      />
  </div>
  )
}

interface TrainingTablesDataType {
  key: number;
  name: string;
  description: string;   
}
const trainingsColumns: ColumnsType<TrainingTablesDataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',    
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',    
  }
];

function TrainingsTable({trainings} : {trainings:CommonTypes.RawTrainingData[] | undefined}){
  const trainingsData = trainings?.map(obj => {
    const { id, ...rest } = obj; 
    return { ...rest, key: id }; 
  }) || undefined;

  return(
    <div className='tab-wrapper'>
      <Table 
          virtual
          columns={trainingsColumns} 
          dataSource={trainingsData} 
      />
  </div>
  )
}

export default Home;