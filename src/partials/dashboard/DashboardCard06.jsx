import React,{useEffect, useState} from 'react';
// import DoughnutChart from '../../charts/DoughnutChart';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard06(overall) {
  let total = 0;
  const updatedRatings = {}
  let variables = ['Euphoric', 'Innovative', 'Counterbalance', 'Supervision'];
  const [overallRatings, setOverallRatings] = useState({});
  useEffect(()=>{
      for (const variable in overall['overall']) {
        total += overall['overall'][variable].averagePercent;
      }
      for (const variable of variables) {
        if (!overall['overall'][variable]) {
          updatedRatings[variable] = 0.00;
        } else {
          updatedRatings[variable] = parseFloat(((overall['overall'][variable].averagePercent / total) * 100).toFixed(1));
        }
      }
      setOverallRatings(updatedRatings);
      console.log(overallRatings[variables[0]]);
  },[overall])

  const chartData = {
    labels: variables,
    datasets: [
      {
        label: 'Motivation',
        data: variables.map(variable => overallRatings[variable] || 0),
        backgroundColor: [
          tailwindConfig().theme.colors.blue[600],
          tailwindConfig().theme.colors.green[400],
          tailwindConfig().theme.colors.orange[400],
          tailwindConfig().theme.colors.red[400],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.blue[800],
          tailwindConfig().theme.colors.green[600],
          tailwindConfig().theme.colors.orange[600],
          tailwindConfig().theme.colors.red[600],
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6  bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 ">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Total Self-motivation Level of RIC</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <div className="p-4 justify-center">
      {chartData && <Doughnut data={chartData} className='m-auto'/>}
      </div>
    </div>
  );
}

export default DashboardCard06;
