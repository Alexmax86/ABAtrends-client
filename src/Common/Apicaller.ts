import * as CommonTypes from './Interfaces'
import * as DashInterfaces from '../pages/dashboard/DashInterfaces'



export async function recordData(jsonObject: CommonTypes.Api_SessionData){
    
    const url = process.env.REACT_APP_API_URL + '/record'
       
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

export async function getSessionData(userSelection: DashInterfaces.DashUserSelection):Promise<DashInterfaces.ApiDataType>{
    try{
      const patientsIds = userSelection.patients!.map(obj => obj?.value)
      const therapistsIds = userSelection.therapists!.map(obj => obj?.value)
      const resp = await fetch(process.env.REACT_APP_API_URL + `/getsessions?patientsids=${patientsIds}&therapistsids=${therapistsIds}&trainingtype=${userSelection.trainingId}&startdate=${userSelection.startDate}&enddate=${userSelection.endDate}`);
      const json = await resp.json(); 
      return json || []
    }
    catch(err){
      throw(err as string)
    }
    
  }

  export async function getRawEntities(): Promise<CommonTypes.RawEntities> {
    try{
      const patientsListApi = await (await fetch(process.env.REACT_APP_API_URL + '/getpatients')).json()
          const therapistsListApi = await (await fetch(process.env.REACT_APP_API_URL + '/gettherapists')).json()
          const trainingListApi= await (await fetch(process.env.REACT_APP_API_URL + '/gettrainingtypes')).json()
          const entities: CommonTypes.RawEntities = {
              Therapists: patientsListApi,
              Patients: therapistsListApi,
              Trainings: trainingListApi
          }
          
          return entities 
    }
    catch(err){ throw err}
          
  }
