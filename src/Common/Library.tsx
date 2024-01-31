import * as DashInterfaces from '../pages/dashboard/DashInterfaces'
import * as CommonTypes from './Interfaces'
import { getRawEntities } from './Apicaller'


//Forms the FiltersContent object that contains list of patients and therapists
export async function getFiltersContent(): Promise<CommonTypes.FiltersContentType> {
  try{   
     const entities:CommonTypes.RawEntities = await getRawEntities();
        const filtersContent: DashInterfaces.FiltersContentType = {
            patientsList: actorDataToDisplayStrings(entities?.Patients),
            therapistsList: actorDataToDisplayStrings(entities?.Therapists),
            trainingTypesList: trainingDataToDisplayStrings(entities?.Trainings)
        }
        
        return filtersContent 
  }
  catch(err){ throw err}        
}



//Helper to extract display strings from API Actors data
export function actorDataToDisplayStrings(userData: DashInterfaces.Actor[] | undefined):DashInterfaces.SelectorDataType{
  if (userData === undefined) {return []}
  else {
    return (userData?.map((actor: DashInterfaces.Actor) => {
      const { id, name, surname } = actor;
      const label = `${name} ${surname}`;
      const value:number = id      
      return { value, label };
    }) || []);
  }
}

export function trainingDataToDisplayStrings(data: DashInterfaces.TrainingType[] | undefined):DashInterfaces.SelectorDataType{
  if (data === undefined) {return []}
  else {
    return (data?.map((training: DashInterfaces.TrainingType) => {
      const { id, name, description } = training;
      const label = `${name}`;
      const value:number = id      
      return { value, label };
    }) || []);
  }
}


export function apiToGraph(apiData:DashInterfaces.ApiDataType):DashInterfaces.GraphPropsType{
  //Initialize empty graph data object to be populated and then returned 
  const graphData:DashInterfaces.GraphPropsType = {datasets:[]} 

  //For each patient in the data received from the API...
  apiData.forEach(patientData => 
    {
      //...Initialize a graph data set object (representing a line in the chart)      
      let graphDataSet:DashInterfaces.GraphDataSet = {
        label: patientData[0].Patient_name,
        data: [],
        backgroundColor: 'black',
        borderColor: 'black',
        tension: 0.4        
      }
      //...Fill single sessions information (representing points of the line) in the 'data' key of the dataset object
      patientData.forEach(session =>{
        let dataPoint:DashInterfaces.GraphDataPoint = {
          x: session.date,
          y: session.responses,
          therapist: session.Therapist_name
        }
        graphDataSet.data.push(dataPoint)
      })
      graphData.datasets.push(graphDataSet)      
    })
    return graphData
}

export function parseStringArrToInt(arg:string | string[]){
  let parsedValue: number[] = []
  if (typeof arg === 'string'){parsedValue.push(parseInt(arg, 10))}
  else {parsedValue = arg.map((str) => parseInt(str))}
  return parsedValue
}






