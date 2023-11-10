import React from "react";
import { useEffect, useState } from 'react';
import UserTable, { TableCell, TableRow, UserTableProps } from "../components/usertable/usertable";

export default function Testpage(){  
    type ParsedRow = {
        id: number,
        name: string,
        surname: string,
        email: string,
        age: number                
    }   
    type ParsedData = ParsedRow[]
    
      
    const [data, setData] = useState<ParsedData>([]);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        async function getData(){
          try{
            const resp = await fetch(process.env.REACT_APP_API_URL + '/therapists');
            const json: ParsedData = await resp.json();
            setData(json);            
          }
          catch(err){
            console.log(err)
            
          }
        }
        getData()  
        
           
      }, []);
      
      function returnTableCells(element:ParsedRow):TableCell[]{
        const cells: TableCell[] = [
          {caption: element.name},
          {caption: element.surname},
          {caption: element.email},
          //{caption: element.age},          
        ]
        return cells

      }
      
      function returnTablerows():TableRow[]{
        const rows:TableRow[] = []
        data.forEach((element:ParsedRow) =>{
            rows.push({
              tableCells: returnTableCells(element),
              key: element.id
            })
            //const tableCells: TableCell[] = returnTableCells(element)
            //const key:number = element.id 
        })
        return rows
        
      }
      const userTableProps: UserTableProps = {
        headers: ['Name', 'Surname', 'Age', 'Email', 'Action'],
        rows: returnTablerows()
      } 
      
    return(
        <UserTable {...userTableProps}/>
         
        
    )
}