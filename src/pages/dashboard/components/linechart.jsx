
import {  
    Chart as ChartJS,
    LineElement,
    TimeScale, //timescale
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    Colors,
    BarController,
    BarElement
  } from 'chart.js'
  
  import 'chartjs-adapter-date-fns'
  import { Line, Bar } from 'react-chartjs-2'
  
  
  ChartJS.register(
    LineElement,
    TimeScale, //timescale
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    Colors,
    BarController,
    BarElement
  )
  
  

  export default function LineChart({graphData}) {
    
    
    const options = {
      scales:{
        x: {
          type: 'time',
          time: {unit: 'day'},
          ticks: {color: 'white'}
        },
        y: {beginAtZero: true}
      },
      plugins: {
        colors: {
          forceOverride: true
        }
      }    
    }
    return <Line data={graphData} options={options} responsive={true} />;
  };