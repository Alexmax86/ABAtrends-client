export type SelectorItemType = {value: number; label: string} | null

export type DashUserSelection = {
    patients: SelectorItemType[] | null,
    therapists: SelectorItemType[] | null,
    trainingId: SelectorItemType[] | null,
    startDate: DateString,
    endDate: DateString
}

export type CustomError = {
    message: string
}

//Actor type entails both Therapist and patients as they have same data shape for now.
//Can be extended in the future if needed
export type Actor = {
    id: number,
    name: string,
    surname: string,
    email: string,
    age: number
}

export type SelectorDataType= {value: number; label: string}[] | undefined

export type TrainingType = {
    id: number,
    name: string,
    description: string
}

export type FiltersContentType = {    
    patientsList: SelectorDataType,
    therapistsList: SelectorDataType,
    trainingTypesList: SelectorDataType    
}

export type DateString = `${number}-${string}-${string}` | null










export type GraphDataPoint = {
    x: DateString, 
    y: number,
    therapist: string
}

export type GraphDataSet = {
    label: string,
    data: GraphDataPoint[],
    backgroundColor: string,
    borderColor: string,
    tension: number
}

export interface GraphPropsType{
    datasets: GraphDataSet[]
}

export type ChartType = 'Line' | 'Column'

export type GraphConfiguration = {
    type: ChartType;
    tension: number;
}

//Data for graph as it's received from API
export interface ApiSessionData {    
    date: DateString,
    patient_id: number,
    therapist_id: number,
    Patient_name: string,
    Therapist_name: string,
    responses: number      
}

//The data received from the Session API is an array containing arrays of data for each patient. 
//Each array contains 
export type ApiDataType = ApiSessionData[][]





