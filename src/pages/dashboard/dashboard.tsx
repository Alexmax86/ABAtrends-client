//import LineChart from './components/linechart';
import FiltersPanel from './components/filterspanel/filterspanel';
import {useState, useEffect } from 'react';
import * as Types from './dashInterfaces'
import * as Lib from './library'

export default function Dashboard(){
  //Contains general data on patients and therapist to fill selection menus  
  const [filtersContent, setFiltersContent] = useState<Types.FiltersContentType>()    
  //Contains current user selection of patients and therapist
  const [filterSelectionData, setFilterSelectionData] = useState<Types.FilterSelectionDataType>()  
  //Contains data fetched from the API
  const [sessionsData, setSessionsData] = useState<Types.SessionApiDataType>([])
  //Contains data from the API manipulated to be plugged in the graph
  const [graphData, setGraphData] = useState<Types.GraphDataType>({datasets:[]})

  //Fetch list of patients and therapist, set filtersContent state
  useEffect(() => {(async () => setFiltersContent(await Lib.getFiltersContent()))()}, []);
  
  //Watches filterSelectionData and fetch data according to it, store in sessionsData
  useEffect(() => {(async () => {
    filterSelectionData !== undefined && setSessionsData(await Lib.getSessionsData(filterSelectionData))    
    }    
    )()}, [filterSelectionData]);
  
  
  //manipulate apiData to feed into graphData state
  useEffect(()=>{
      console.log("graphData function")
      const patientList:number[] = []

      const tempGraphData = {datasets:[]}      
      
              
        //Count how many patients in the data and store in patientList
        for (const element of sessionsData){
          !patientList.includes(element.patient_id)
          && patientList.push(element.patient_id)
        }
      
        if (patientList.length === 0){setGraphData({datasets:[]})}
        else {          
          patientList.forEach((element) =>{
            const line = {
              label: element,
              data: [],          
              tension: 0.2
            }
            sessionsData.forEach((apiElement) =>{
              if (apiElement.patient_id === element){
                const dataPiece = {x: apiElement.date, y: apiElement.responses}
                line.data.push(dataPiece)            
              }
            })
            
            tempGraphData.datasets.push(line)        
            console.log("Tempgraphdata:" + JSON.stringify(tempGraphData))
            setGraphData(tempGraphData)
          })
        }
      
  }, [apiData]
  )



  
  
  return (    
    <div>            
      {
      <FiltersPanel filtersContent= {filtersContent} setFilterSelectionData= {setFilterSelectionData} />
      //<LineChart graphData={graphData}></LineChart>
    }
      
    </div>
  )
}