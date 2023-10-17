import LineChart from './components/linechart';
import Filterselector from './components/filterselector';

import { useState } from 'react';

const data = {
  //labels: ['2022-11-01', '2022-11-02', '2023-12-15' ],
  datasets:[
    {
      label: 'John',
      data: [{x:'2022-11-01', y: 5}, {x:'2022-11-02', y: 2}, {x:'2022-12-01', y: 8}],
      backgroundColor: 'blue',
      borderColor: 'black',
      tension: 0.4
    },
    {
      label: 'Jack',
      data: [{x:'2022-11-07', y: 4}, {x:'2022-12-02', y: 2}, {x:'2023-01-01', y: 7}],
      backgroundColor: 'red',
      borderColor: 'yellow',
      tension: 0.4
    }
  ]
}

const data2 = {
  //labels: ['2022-11-01', '2022-11-02', '2023-12-15' ],
  datasets:[
    
  ]
}

export default function Dashboard(){
  const [graphData, setGraphData] = useState(data)
  

  
  
  return (    
    <div>
      <Filterselector/>
      <LineChart graphData={graphData}/>
    </div>
  )
}