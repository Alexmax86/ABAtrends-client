import React from "react";
import { useEffect, useState } from 'react';
import UserTable, { TableCell, TableRow, UserTableProps } from "../components/usertable/usertable";
import { previousDay } from "date-fns";

interface ObjState{
  status: string,
  changed: boolean
}

export default function Testpage(){  
  const [state, setState] = useState<ObjState>({status: "Initial", changed:false})
  
 return (
  <>
    <p>{state.status}</p>
    <p>{state.changed}</p>
  </>
 ) 

}