import LineChart from './components/linechart';
import Filterselector from './components/filterselector';
import { filtersContext } from './dashcontexts';
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';



export default function Dashboard(){
  //Patients list is loaded in filterPopulationData
  //User selection is stored in filterSelectionData
  //When filterSelectionData changes API is called and store result in apiData
  const [filterPopulationData, setFilterPopulationData] = useState([])
  const [filterSelectionData, setFilterSelectionData] = useState(null)
  const [apiData, setApiData] = useState([])  
  const [graphData, setGraphData] = useState({datasets:[]})
  

  //fetch lists of patients
  useEffect(() => {
    async function getPopulationData(){
      try{
        const resp = await fetch(process.env.REACT_APP_API_URL + '/patients');
        const json = await resp.json();              
        setFilterPopulationData(json);        
      }
      catch(err){
        console.log(err)        
      }
    }
    getPopulationData()   
       
  }, [])
  ;

  //fetch data according to filter selection and store in apiData
  useEffect(()=>{
    async function getData(){
      try{
        const resp = await fetch(process.env.REACT_APP_API_URL + `/getsessions?id=${filterSelectionData.id}&startdate=${filterSelectionData.startDate}&enddate=${filterSelectionData.endDate}`);
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
      const patientList = []

      const tempGraphData = {datasets:[]}      
      
        if (apiData.length > 0) {        
        //Count how many patients in the data and store in patientList
        for (const element of apiData){
          !patientList.includes(element.patient_id)
          && patientList.push(element.patient_id)
        }   
        
      }

      patientList.forEach((element) =>{
        const line = {
          label: element,
          data: [],
          backgroundColor: 'blue',
          borderColor: 'black',
          tension: 0.2
        }
        apiData.forEach((apiElement) =>{
          if (apiElement.patient_id === element){
            const dataPiece = {x: apiElement.date, y: apiElement.responses}
            line.data.push(dataPiece)            
          }
        })
        tempGraphData.datasets.push(line)        
        setGraphData(tempGraphData)
      })
  }, [apiData]
  )



  const testFunction = () => {setFilterSelectionData({id: [1, 2], startDate: '2020-01-01', endDate: '2024-01-01'})}
  
  
  return (    
    <div>      
      <button onClick={testFunction}>Chaynge filter data</button>
      <Filterselector filterPopulationData={filterPopulationData} setFilterSelectionData={setFilterSelectionData}/>
      {graphData.datasets.length > 0 && <LineChart graphData={graphData}></LineChart>}
    </div>
  )
}