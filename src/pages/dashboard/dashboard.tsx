// @ts-ignore
import LineChart from './components/linechart.jsx';
import FiltersPanel from './components/filterspanel/filterspanel';
import {useState, useEffect } from 'react';
import { Button } from 'antd';
import { BarChartOutlined, LineChartOutlined } from '@ant-design/icons';
import { ErrorModal } from '../../Common/Components/Components';

import * as Types from './DashInterfaces.js'
import * as Lib from '../../Common/Library'
import "./dashboard.css"
import * as Apicaller from './../../Common/Apicaller';

const selectionInit = {patients: null, therapists: null, trainingId: null, startDate: null, endDate: null}


export default function Dashboard(){
  //Contains general data on patients and therapist to fill selection menus  
  const [filtersContent, setFiltersContent] = useState<Types.FiltersContentType>()    
  //Contains current user selection of patients and therapist
  const [dashUserSelection, setDashUserSelection] = useState<Types.DashUserSelection>(selectionInit)  
  //Contains data fetched from the API
  const [apiData, setApiData] = useState<Types.ApiDataType>([])
  //Contains data from the API manipulated to be plugged in the graph
  const [graphData, setGraphData] = useState<Types.GraphPropsType>({datasets:[]});
  
  const [graphConfiguration, setGraphConfiguration] = useState<Types.GraphConfiguration>({type: 'Line', tension: 0.4})

  
  //Fetch list of patients and therapist, set filtersContent state
  useEffect(() => {
      (async () => {        
          try {
            const fetchedFiltersContent = await Lib.getFiltersContent();
            setFiltersContent(fetchedFiltersContent);
            setDashUserSelection((prevState:any) => (        
              {
                ...prevState, 
                therapists: fetchedFiltersContent?.therapistsList
              })); 
          } catch(err){
            ErrorModal(err as string)
          }
           
      }
      )()
  }, []);

  
  
  //Watches filterSelectionData and fetches data according to it, store in apiData
  
  useEffect(() => {(async () => {
    try{     
      Object.values(dashUserSelection).every(property => property !== null)
      && setApiData(await Apicaller.getSessionData(dashUserSelection))      
    }
    catch(err){
      ErrorModal(err as string)
    }
    }    
    )()}, [dashUserSelection]);
  
  
  //manipulate apiData to feed into graphData state  
  useEffect(()=>{ setGraphData(Lib.apiToGraph(apiData)) }, [apiData])
  
  
  
  const setChartType = (arg:Types.ChartType) => {
    const newConfiguration: Types.GraphConfiguration = { ...graphConfiguration };
    newConfiguration.type = arg    
    setGraphConfiguration(newConfiguration)
  }


  
  return (    
    <div className='dashboard-container'>
      <div className='filters-panel-container'>            
        <FiltersPanel 
          filtersContent= {filtersContent} 
          dashUserSelectionState= {{dashUserSelection: dashUserSelection, setUserSelection: setDashUserSelection}} 
          setChartType={setChartType} 
        />
      </div>
      <div className='graph-container'>
        <LineChart graphData={graphData} graphConfiguration={graphConfiguration} ></LineChart>
        
        <div className='settings-container'>
           {
            graphConfiguration.type === 'Line'
            ? <Button size="large" shape="circle" icon={ <BarChartOutlined /> } onClick={() => setGraphConfiguration({type: 'Column', tension: 0.4})} />
            : <Button size="large" shape="circle" icon={ <LineChartOutlined /> } onClick={() => setGraphConfiguration({type: 'Line', tension: 0.4})} />
           }
           
           
        </div>
      </div>
    </div>
  )
}