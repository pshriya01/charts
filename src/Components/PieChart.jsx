import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { ArcElement } from "chart.js";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
  } from 'chart.js'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    BarElement
  )

ChartJS.register(ArcElement);

const PieChart = () => {
    const data = {
        datasets: [
          {
            data: [23,18,12,12,12,2],
            backgroundColor: ['#7C95EA', '#544B8D', '#3BB85E',"#FFC400","#B54F69",'#E994B1'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)', 'rgba(255, 205, 86, 1)'],
            borderWidth: 1,
          },
        ],
        labels: ['Adani', 'Reliance',"Ruzzet" ,'Rezicure'],
      };
    
      const options = {
        cutout: '50%', 
        plugins: {
          legend: {
            position: 'bottom', 
          },
        },
      };
  return (
    <div>
    <div style={{padding:"20px",backgroundColor: "#FFF",textAlign:"left",borderTopLeftRadius:"12px",borderTopRightRadius:"12px"}}>
    <p style={{fontSize: "14px",fontStyle: "normal",fontWeight: "400"}}>Emissions by supplier</p>
    </div>
    <div style={{textAlign:"left",borderBottomLeftRadius: "12px",borderBottomLeftRadius:"12px",paddingLeft:"89px",paddingRight:"89px",
  backgroundColor: "#FFF"}}>
      <Doughnut data={data} options={options} />
    </div>
    </div>
  )
}

export default PieChart

