export type UserSelectionState ={
    
        userSelection: SelectionStateType | undefined
        setUserSelection: Function
      
}

//Describes selection across all widgets (a therapist, a patient and a training)
export type SelectionStateType = {
    Therapist: SelectorItemType
    Patient: SelectorItemType
    Training: SelectorItemType
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

