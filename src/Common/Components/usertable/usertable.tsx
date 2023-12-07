import { callback } from "chart.js/dist/helpers/helpers.core";
import React from "react"
import './usertable.css'


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
        <table className="customTable">
        <thead>
            <tr>
                {tableProps.headers.map((header, index) => (
                    <th key={index}>{header}</th>
                ))}
            </tr>
        </thead>
        <tbody>
        {tableProps.rows.map((rowItem: TableRow) => (
            <tr key={rowItem.key}>
               {rowItem.tableCells.map((cellItem, index) => (
                <td data-label={tableProps.headers[index]} key={index}>
                    {
                        !('callBack' in cellItem)
                        ? cellItem.caption                                               
                        : (<button onClick={cellItem.callBack}>{cellItem.caption}</button>)
                    }
                    
                </td>
               ))} 
            </tr>
        
        ))}      
        </tbody>
        </table> 
    )
}
