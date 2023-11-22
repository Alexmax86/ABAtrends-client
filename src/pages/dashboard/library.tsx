import * as Types from './dashInterfaces'

//Calls API and forms the FiltersContent object that contains list of patients and therapists
export async function getFiltersContent(): Promise<Types.FiltersContentType> {
           
        const filtersContent: Types.FiltersContentType = {
            patientsList: await (await fetch(process.env.REACT_APP_API_URL + '/getpatients')).json(),
            therapistsList: await (await fetch(process.env.REACT_APP_API_URL + '/gettherapists')).json(),
            trainingTypesList: await (await fetch(process.env.REACT_APP_API_URL + '/gettrainingtypes')).json()
        }
        return filtersContent             
      
}

//Helper to extract display strings from API Actors data
export function actorDataToDisplayStrings(userData: Types.Actor[] | undefined):{value: number; label: string}[]{
  if (userData === undefined) {return []}
  else {
    return (userData?.map((actor: Types.Actor) => {
      const { id, name, surname } = actor;
      const label = `${name} ${surname}`;
      const value:number = id      
      return { value, label };
    }) || []);
  }
}

export function trainingDataToDisplayStrings(data: Types.TrainingType[] | undefined):{value: number; label: string}[]{
  if (data === undefined) {return []}
  else {
    return (data?.map((training: Types.TrainingType) => {
      const { id, name, description } = training;
      const label = `${name}`;
      const value:number = id      
      return { value, label };
    }) || []);
  }
}

export async function getApiData(filterSelectionData: Types.FilterSelectionDataType):Promise<Types.ApiDataType>{
  const resp = await fetch(process.env.REACT_APP_API_URL + `/getsessions?patientsids=${filterSelectionData.patientsIds}&therapistsids=${filterSelectionData.therapistsIds}&trainingtype=${filterSelectionData.trainingId}&startdate=${filterSelectionData.startDate}&enddate=${filterSelectionData.endDate}`);
  const json = await resp.json(); 
  return json || []
}

export function apiToGraph(apiData:Types.ApiDataType):Types.GraphPropsType{
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
    return tempGraphProps
}

export function parseStringArrToInt(arg:string | string[]){
  let parsedValue: number[] = []
  if (typeof arg === 'string'){parsedValue.push(parseInt(arg, 10))}
  else {parsedValue = arg.map((str) => parseInt(str))}
  return parsedValue
}



