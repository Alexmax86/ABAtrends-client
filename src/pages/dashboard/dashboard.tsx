// @ts-ignore
import LineChart from './components/linechart';
import FiltersPanel from './components/filterspanel/filterspanel';
import {useState, useEffect } from 'react';

import * as Types from './dashInterfaces'
import * as Lib from './library'
import "./dashboard.css"

export default function Dashboard(){
  //Contains general data on patients and therapist to fill selection menus  
  const [filtersContent, setFiltersContent] = useState<Types.FiltersContentType>()    
  //Contains current user selection of patients and therapist
  const [filterSelectionData, setFilterSelectionData] = useState<Types.FilterSelectionDataType>()  
  //Contains data fetched from the API
  const [apiData, setApiData] = useState<Types.ApiDataType>([])
  //Contains data from the API manipulated to be plugged in the graph
  const [graphData, setGraphData] = useState<Types.GraphPropsType>({datasets:[]})

  //Fetch list of patients and therapist, set filtersContent state
  useEffect(() => {(async () => setFiltersContent(await Lib.getFiltersContent()))()}, []);
  
  //Watches filterSelectionData and fetch data according to it, store in apiData
  useEffect(() => {(async () => {
    filterSelectionData !== undefined && setApiData(await Lib.getApiData(filterSelectionData))    
    }    
    )()}, [filterSelectionData]);
  
  
  //manipulate apiData to feed into graphData state
  
  useEffect(()=>{
    const tempGraphProps:any = {datasets:[]}    
    apiData.forEach(patientData => 
      {      
        let graphDataSet:Types.GraphDataSet = {
          label: patientData[0].Patient_name,
          data: [],
          backgroundColor: 'black',
          borderColor: 'black',
          tension: 0.4        
        }
        patientData.forEach(session =>{
          let dataPoint:Types.GraphDataPoint = {
            x: session.date,
            y: session.responses
          }
          graphDataSet.data.push(dataPoint)
        })
        tempGraphProps.datasets.push(graphDataSet)
      })    
    setGraphData(tempGraphProps) 
    }, [apiData])
  


  
  
  return (    
    <div className='dashboard-container'>
      <div className='filters-panel-container'>            
        <FiltersPanel filtersContent= {filtersContent} setFilterSelectionData= {setFilterSelectionData} />
      </div>
      <div className='graph-container'>
        <LineChart graphData={graphData}></LineChart>
      </div>
    </div>
  )
}