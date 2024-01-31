import * as CommonTypes from './Interfaces'
import * as DashInterfaces from '../pages/dashboard/DashInterfaces'

let baseURL: string;

if (process.env.NODE_ENV === 'development') {  
  baseURL = 'http://localhost:3000/api'; 
} else {  
  const { protocol, host } = window.location;
  baseURL = `${protocol}//${host}/api`;
}

//Called to record data of a session
export async function recordData(jsonObject: CommonTypes.Api_SessionData){
    
    const url : string = baseURL + '/record'
       
    // Configuration for the fetch request
    const requestOptions = {
    method: 'POST', // HTTP method
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(jsonObject) // Convert data to JSON format
    };
    try{
        const response = await fetch(url, requestOptions)
        if (!response.ok) {
        throw new Error
        }        
        return true
    }
    catch (err){
        throw new Error(err as string);
    }
    
}

//Called to get information on sessions based on query parameters
export async function getSessionData(userSelection: DashInterfaces.DashUserSelection):Promise<DashInterfaces.ApiDataType>{
    try{
      const patientsIds = userSelection.patients!.map(obj => obj?.value)
      const therapistsIds = userSelection.therapists!.map(obj => obj?.value)
      const resp = await fetch(baseURL + `/getsessions?patientsids=${patientsIds}&therapistsids=${therapistsIds}&trainingtype=${userSelection.trainingId}&startdate=${userSelection.startDate}&enddate=${userSelection.endDate}`);
      const json = await resp.json(); 
      return json || []
    }
    catch(err){
      throw(err as string)
    }
    
  }

export async function getRawEntities(): Promise<CommonTypes.RawEntities> {
  try{
        const patientsListApi = await (await fetch(baseURL + '/getpatients')).json()
        const therapistsListApi = await (await fetch(baseURL + '/gettherapists')).json()
        const trainingListApi= await (await fetch(baseURL + '/gettrainingtypes')).json()
        const entities: CommonTypes.RawEntities = {
            Therapists: patientsListApi,
            Patients: therapistsListApi,
            Trainings: trainingListApi
        }
        
        return entities 
  }
  catch(err){ throw err}          
}


