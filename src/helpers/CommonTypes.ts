

export type SelectorItemType= {value: number; label: string} | undefined

export type SelectorDataType= {value: number; label: string}[] | undefined

export type FiltersContentType = {    
    patientsList: SelectorDataType,
    therapistsList: SelectorDataType,
    trainingTypesList: SelectorDataType    
}

