//////////////Interfaces corresponding to unprocessed data as coming from SQL tables
export type RawActorData = {
    id: number,
    name: string,
    surname: string,
    email: string,
    age: number
}

export type RawTrainingData = {
    id: number,
    name: string,
    description: string
}

export type RawEntities = {
    Therapists: RawActorData[],
    Patients: RawActorData[],
    Trainings: RawTrainingData[]
} | undefined
/************************************************************************************* */

export type UserSelectionState ={    
        userSelection: SelectionStateType 
        setUserSelection: React.Dispatch<React.SetStateAction<SelectionStateType>>      
}

//Describes selection across all widgets (a therapist, a patient and a training)
export type SelectionStateType = {
    Therapist: SelectorItemType | null
    Patient: SelectorItemType | null
    Training: SelectorItemType | null
} 

export type SelectorItemType= {value: number; label: string} | undefined

export type SelectorDataType= {value: number; label: string}[] | undefined

export type FiltersContentType = {    
    patientsList: SelectorDataType,
    therapistsList: SelectorDataType,
    trainingTypesList: SelectorDataType    
} | undefined

export type DateString = `${number}-${string}-${string}`;

export interface Api_SessionData{
    date: DateString,
    patient_id?: number,
    therapist_id: number, 
    training_type_id: number   
    responses: number  
}

