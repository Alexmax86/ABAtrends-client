export type CustomError = {
    message: string
}

export type Patient = {
    id: number,
    name: string,
    surname: string,
    email: string,
    age: number
}

export type Therapist = {
    id: number,
    name: string,
    surname: string,
    email: string,
    age: number
}

export type FiltersContentType = {    
    patientsList: Patient[],
    therapistsList: Therapist[]
} | CustomError

type DateString = `${number}-${string}-${string}`;

export type FilterSelectionDataType = {
    patientsIds: number[],
    therapistsIds: number[],
    startDate: DateString,
    endDate: DateString
}

export type FilterSelectorPropsType = {
    filtersContent?: FiltersContentType,
    setFiltersContent?: React.Dispatch<React.SetStateAction<FiltersContentType | undefined>>
} | CustomError

