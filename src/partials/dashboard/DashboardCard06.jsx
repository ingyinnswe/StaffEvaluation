import React,{useEffect, useState} from 'react';
import DoughnutChart from '../../charts/DoughnutChart';

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
      console.log(overallRatings);
  },[overall])

  const chartData = {
    datasets: [
      {
        label: 'Motivation',
        data: [
          20,20,20,20
        ],
        backgroundColor: [
          tailwindConfig().theme.colors.indigo[500],
          tailwindConfig().theme.colors.blue[400],
          tailwindConfig().theme.colors.indigo[800],
          tailwindConfig().theme.colors.gray[400],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.indigo[600],
          tailwindConfig().theme.colors.blue[500],
          tailwindConfig().theme.colors.indigo[900],
          tailwindConfig().theme.colors.gray[600],
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 ">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Total Self-motivation Level of RIC</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <DoughnutChart data={chartData} width={389} height={260} />
    </div>
  );
}

export default DashboardCard06;
