import * as Types from './dashInterfaces'

//Calls API and forms the FiltersContent object that contains list of patients and therapists
export async function getFiltersContent(): Promise<Types.FiltersContentType> {
    try{        
        const filtersContent: Types.FiltersContentType = {
            patientsList: await (await fetch(process.env.REACT_APP_API_URL + '/getpatients')).json(),
            therapistsList: await (await fetch(process.env.REACT_APP_API_URL + '/gettherapists')).json()
        } 
        
        return filtersContent             
      }
      catch(err){
        let customError:Types.CustomError
        customError = {message: 'Unknown Error'} 
        console.log(err)
        if (err instanceof Error) customError = {message: err.message} 
        return customError
      }
}