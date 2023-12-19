
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
  
  

  export default function LineChart({graphData, graphConfiguration}) {
    
    
    const options = {
      //Set up time scale on x axis
      scales:{
        x: {
          type: 'time',
          time: {unit: 'day', tooltipFormat: 'MMM d, yyyy'},
          ticks: {color: 'white'}
        },
        y: {beginAtZero: true}
      },
      
      plugins: {
        //Set up color plugin
        colors: {
          forceOverride: true
        },
        //Configure tooltip
        tooltip:{
          callbacks:{
            title: (context) => context[0].dataset.data[context.dataIndex],
            label: function (context) {
              let therapist = context.dataset.data[context.dataIndex].therapist //for 'context.dataset' children check interface GraphDataSet
              let responses = context.dataset.data[context.dataIndex].y
              return [`Responses: ${responses}`, `Therapist: ${therapist}`]
              
            }
          }
        } 
      },         
    }
    return (
      
      graphConfiguration.type === 'Line' 
      ? ( <Line data={graphData} options={options} responsive={true} /> ) 
      : ( <Bar data={graphData} options={options} responsive={true} />  )
    
    );
  };