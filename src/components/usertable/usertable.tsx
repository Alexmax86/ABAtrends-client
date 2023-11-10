import React from "react"
export interface TableCell {
    caption: string;
    isButton?: boolean
    callBack?: () => any
}

export interface TableRow {
    tableCells: TableCell[]
    key: number
}

export interface UserTableProps {
    headers: string[],
    rows: TableRow[]
}

export default function UserTable(tableProps: UserTableProps){
    return(
        <table>
        <thead>
            <tr>
                {tableProps.headers.map((header, index) => (
                    <th key={index}>{header}</th>
                ))}
            </tr>
        </thead>
        {tableProps.rows.map((rowItem) => (
            <tr>
               {rowItem.tableCells.map((cellItem) => (
                <td>{cellItem.caption}</td>
               ))} 
            </tr>
        ))}      
        
        </table> 
    )
}
