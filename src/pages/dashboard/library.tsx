import * as Types from './dashInterfaces'

//Calls API and forms the FiltersContent object that contains list of patients and therapists
export async function getFiltersContent(): Promise<Types.FiltersContentType> {
           
        const filtersContent: Types.FiltersContentType = {
            patientsList: await (await fetch(process.env.REACT_APP_API_URL + '/getpatients')).json(),
            therapistsList: await (await fetch(process.env.REACT_APP_API_URL + '/gettherapists')).json()
        }
        return filtersContent             
      
}

//Helper to extract display strings from API Actors data
export function actorDataToDisplayStrings(userData: Types.Actor[] | undefined):{id: number; displayString: string}[]{
  if (userData === undefined) {return []}
  else {
    return (userData?.map((actor: Types.Actor) => {
      const { id, name, surname } = actor;
      const displayString = `${name} ${surname}`;
      return { id, displayString };
    }) || []);
  }

}

export async function getApiData(filterSelectionData: Types.FilterSelectionDataType):Promise<Types.ApiDataType>{
  const resp = await fetch(process.env.REACT_APP_API_URL + `/getsessions?patientsids=${filterSelectionData.patientsIds}&therapistsids=${filterSelectionData.therapistsIds}&startdate=${filterSelectionData.startDate}&enddate=${filterSelectionData.endDate}`);
  const json = await resp.json(); 
  return json || []
}


