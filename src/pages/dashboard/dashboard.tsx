// @ts-ignore
import LineChart from './components/linechart.jsx';
import FiltersPanel from './components/filterspanel/filterspanel';
import {useState, useEffect } from 'react';

import * as Types from './dashInterfaces'
import * as Lib from '../../helpers/library'
import "./dashboard.css"

export default function Dashboard(){
  //Contains general data on patients and therapist to fill selection menus  
  const [filtersContent, setFiltersContent] = useState<Types.FiltersContentType>()    
  //Contains current user selection of patients and therapist
  const [filterSelectionData, setFilterSelectionData] = useState<Types.FilterSelectionDataType>()  
  //Contains data fetched from the API
  const [apiData, setApiData] = useState<Types.ApiDataType>([])
  //Contains data from the API manipulated to be plugged in the graph
  const [graphData, setGraphData] = useState<Types.GraphPropsType>({datasets:[]});
  
  const [graphConfiguration, setGraphConfiguration] = useState<Types.GraphConfiguration>({type: 'Line', tension: 0.4})

  //Fetch list of patients and therapist, set filtersContent state
  useEffect(() => {(async () => setFiltersContent(await Lib.getFiltersContent()))()}, []);
  
  //Watches filterSelectionData and fetch data according to it, store in apiData
  useEffect(() => {(async () => {
    filterSelectionData !== undefined && setApiData(await Lib.getApiData(filterSelectionData))    
    }    
    )()}, [filterSelectionData]);
  
  
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
          setFilterSelectionData= {setFilterSelectionData} 
          setChartType={setChartType} 
        />
      </div>
      <div className='graph-container'>
        <LineChart graphData={graphData} graphConfiguration={graphConfiguration} ></LineChart>
      </div>
    </div>
  )
}