import React from 'react'
import chartsData from '../redux/ChartData'
import { Bar } from 'react-chartjs-2';
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

const Charts = () => {
    console.log(chartsData)
    const emissions2022 = chartsData
    .filter(entry => entry.Year === 2022)
    .map(entry => entry.Emissions);

  const emissions2023 = chartsData
    .filter(entry => entry.Year === 2023)
    .map(entry => entry.Emissions);

    const re2022 = chartsData
    .filter(entry => entry.Year === 2022)
    .map(entry => entry["R/E"]);

  const re2023 = chartsData
    .filter(entry => entry.Year === 2023)
    .map(entry => entry["R/E"]);

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Emissions-2022',
        data: emissions2022,
        backgroundColor: '#32d260',
        borderColor: '#32d260',
        borderWidth: 1,
        yAxisID: 'y1',
      },
      {
        label: 'Emissions-2023',
        data: emissions2023,
        backgroundColor: '#7790e4',
        borderColor: '#7790e4',
        borderWidth: 1,
        yAxisID: 'y1',
      },
      {
        label: 'R/E-2022',
        data: re2022,
        borderColor: '#E03021',
        backgroundColor:"#E03021",
        type: 'line', 
        fill: false,
        yAxisID: 'y2',
      },
      {
        label: 'R/E-2023',
        data: re2023,
        borderColor: '#FFC400',
        backgroundColor:"#FFC400",
        type: 'line',
        fill: false,
        yAxisID: 'y2',
      },
    ],
  };

  const chartOptions = {
    scales: {
     
    y1: {
        type: 'linear',
        beginAtZero: true,
        position: 'left',
        min:0,
        max:9000,
        stepSize:1000
      },
      y2: {
        type: 'linear',
        beginAtZero: true,
        position: 'right',
        min:0,
        max:180,
        stepSize:20
      },

    },
  };

  return (
    <div style={{width:"1005px",backgroundColor:"#FFF",padding:"20px 39px 10px 20px",borderRadius: "12px",border: "1px solid #EBEBEB",paddingLeft:"24px",
    boxShadow: "0px 0.599px 5.32px 0px rgba(0, 0, 0, 0.01), 0px 2.01px 17.869px 0px rgba(0, 0, 0, 0.01), 0px 9px 80px 0px rgba(0, 0, 0, 0.02)"}}>
      <p style={{textAlign:"left"}}>Emissions/Revenue</p>
      <Bar data={data} options={chartOptions} />
    </div>
  );
};


export default Charts