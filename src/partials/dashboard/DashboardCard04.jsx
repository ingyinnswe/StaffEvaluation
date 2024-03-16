import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// Import utilities
import { tailwindConfig } from '../../utils/Utils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function DashboardCard04() {

  const getDynamicDates = () => {
    const today = new Date();
    const dynamicDates = [];
    let dayDifference = 0;

    // Loop to get previous five weekdays
    while (dynamicDates.length < 5) {
      const newDate = new Date(today);
      newDate.setDate(today.getDate() - dayDifference);
      const dayOfWeek = newDate.getDay();
      // Check if it's not a Saturday (6) or Sunday (0)
      if (dayOfWeek !== 6 && dayOfWeek !== 0) {
        dynamicDates.push(newDate.toLocaleDateString());
      }
      dayDifference++;
    }

    return dynamicDates.reverse(); // Reverse to maintain chronological order
  };

  const chartData = {
    labels: getDynamicDates(), // Use dynamic dates for labels
    datasets: [
      // Light blue bars
      {
        label: 'Euphoric',
        data: [
          800, 1600, 900, 1300, 1950, 1700,
        ],
        backgroundColor: tailwindConfig().theme.colors.blue[600],
        hoverBackgroundColor: tailwindConfig().theme.colors.blue[800],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      {
        label: 'Innovative',
        data: [
          800, 1600, 900, 1300, 1950, 1700,
        ],
        backgroundColor: tailwindConfig().theme.colors.green[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.green[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      {
        label: 'Counterbalance',
        data: [
          800, 1600, 900, 1300, 1950, 1700,
        ],
        backgroundColor: tailwindConfig().theme.colors.orange[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.orange[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      // Blue bars
      {
        label: 'Supervision',
        data: [
          4900, 2600, 5350, 4800, 5200, 4800,
        ],
        backgroundColor: tailwindConfig().theme.colors.red[300],
        hoverBackgroundColor: tailwindConfig().theme.colors.red[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Weekly Report for RIC Self Motivation</h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      <div className="p-6">
        <Bar
          data={chartData}
          options={{
            indexAxis: 'x',
            plugins: {
              legend: {
                position: 'bottom',
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default DashboardCard04;
