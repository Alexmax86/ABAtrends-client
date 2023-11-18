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

export type FiltersContentType = {    
    patientsList: Actor[],
    therapistsList: Actor[]    
}

export type DateString = `${number}-${string}-${string}`;

export type FilterSelectionDataType = {
    patientsIds: number[],
    therapistsIds: number[],
    startDate: DateString,
    endDate: DateString
}

export type FiltersPanelPropsType = {
    filtersContent?: FiltersContentType,
    setFilterSelectionData: React.Dispatch<React.SetStateAction<FilterSelectionDataType | undefined>>
} 



export type GraphDataPoint = {
    x: DateString, 
    y: number
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

export interface GraphConfiguration{
    type: 'Line' | 'Column';
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

export type ApiDataType = ApiSessionData[][]



