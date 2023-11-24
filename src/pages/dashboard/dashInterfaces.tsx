
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

export type DateString = `${number}-${string}-${string}`;

export type FilterSelectionDataType = {
    patientsIds: number[],
    therapistsIds: number[],
    trainingId: number | undefined,
    startDate: DateString,
    endDate: DateString
}

export type FiltersPanelPropsType = {
    filtersContent?: FiltersContentType,
    setFilterSelectionData: React.Dispatch<React.SetStateAction<FilterSelectionDataType | undefined>>,
    setChartType: (arg:ChartType)=> void;
} 



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

export type ApiDataType = ApiSessionData[][]

export interface PanelPickerProps{
    setFilterSelectionData:React.Dispatch<React.SetStateAction<FilterSelectionDataType | undefined>>,
    data?: SelectorDataType
}



