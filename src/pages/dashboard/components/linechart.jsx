
import {  
    Chart as ChartJS,
    LineElement,
    TimeScale, //timescale
    LinearScale,
    PointElement,
    Tooltip,
    Legend
  } from 'chart.js'
  
  import 'chartjs-adapter-date-fns'
  import { Line } from 'react-chartjs-2'
  
  ChartJS.register(
    LineElement,
    TimeScale, //timescale
    LinearScale,
    PointElement,
    Tooltip,
    Legend
  )
  
  
  export default function LineChart({graphData}) {
    
    console.log("Calling")
    console.log(graphData)
    const options = {
      scales:{
        x: {
          type: 'time',
          time: {unit: 'day'},
          ticks: {color: 'white'}
        },
        y: {beginAtZero: true}
      }    
    }
    return <Line data={graphData} options={options}/>;
  };