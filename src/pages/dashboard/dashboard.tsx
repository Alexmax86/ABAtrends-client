//import LineChart from './components/linechart';
import Filterselector from './components/filterselector';
import {useState, useEffect } from 'react';
import * as Types from './dashInterfaces'
import * as Lib from './library'

export default function Dashboard(){
  //Contains general data on patients and therapist to fill selection menus  
  const [filtersContent, setFiltersContent] = useState<Types.FiltersContentType>()  
  const [filterSelectionData, setFilterSelectionData] = useState<Types.FilterSelectionDataType>()
  const [apiData, setApiData] = useState([])  
  const [graphData, setGraphData] = useState({datasets:[]})

  //Fetch list of patients and therapist, set its state
  useEffect(() => {    
    (async () => 
      setFiltersContent(await Lib.getFiltersContent())
    )()
  }, []);
  /*
  //fetch data according to filter selection and store in apiData
  useEffect(() => {
    async function getData(){
      try{        
        const resp = await fetch(
          process.env.REACT_APP_API_URL + `/getsessions
          ?patientsids=${filterSelectionData?.patientsIds}
          &therapistsids=${filterSelectionData?.therapistsIds}
          &startdate=${filterSelectionData?.startDate}
          &enddate=${filterSelectionData?.endDate}`);
        const json = await resp.json();                    
        setApiData(json);
      }
      catch(err){
        console.log(err)        
      }
    }
    getData()
  }, [filterSelectionData]
  )

  
  //manipulate apiData to feed into graphData state
  useEffect(()=>{
      console.log("graphData function")
      const patientList = []

      const tempGraphData = {datasets:[]}      
      
              
        //Count how many patients in the data and store in patientList
        for (const element of apiData){
          !patientList.includes(element.patient_id)
          && patientList.push(element.patient_id)
        }   
        
      
        if (patientList.length === 0){console.log(patientList); setGraphData({datasets:[]})}
        else {
          
          patientList.forEach((element) =>{
            const line = {
              label: element,
              data: [],          
              tension: 0.2
            }
            apiData.forEach((apiElement) =>{
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

*/

  
  
  return (    
    <div>            
      {
      <Filterselector filtersContent= {filtersContent} setFiltersContent= {setFiltersContent} />
      //<LineChart graphData={graphData}></LineChart>
    }
      
    </div>
  )
}