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

export type SessionApiDataType = {
    id: number,
    therapist_id: number,
    patient_id: number,
    date: DateString,
    responses: number
}[]

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



