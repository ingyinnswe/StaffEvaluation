import React, { useState, useEffect }  from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
// Import utilities
import { tailwindConfig } from "../../utils/Utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function DashboardCard04({ overall }) {
  
  const [overallRatings, setOverallRatings] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!overall || !overall["overall"]) {
      setIsLoading(false); // Set loading state to false if overall data is not available
      return;
    }
    let total = 0;
    const updatedRatings = {};
    const variables = ["Euphoric", "Innovative", "Counterbalance", "Supervision"];
    
    // Calculate total and update ratings
    for (const variable in overall["overall"]) {
      total += overall["overall"][variable].averagePercent;
    }
    for (const variable of variables) {
      if (!overall["overall"][variable]) {
        updatedRatings[variable] = 0.0;
      } else {
        updatedRatings[variable] = parseFloat(
          ((overall["overall"][variable].averagePercent / total) * 100).toFixed(1)
        );
      }
    }
    setOverallRatings(updatedRatings);
    setIsLoading(false); 
  }, [overall]);

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
      {
        label: "Euphoric",
        data: Array(5).fill(overallRatings["Euphoric"]),
        backgroundColor: tailwindConfig().theme.colors.blue[600],
        hoverBackgroundColor: tailwindConfig().theme.colors.blue[800],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      {
        label: "Innovative",
        data: Array(5).fill(overallRatings["Innovative"]),
        backgroundColor: tailwindConfig().theme.colors.green[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.green[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      {
        label: "Counterbalance",
        data: Array(5).fill(overallRatings["Counterbalance"]),
        backgroundColor: tailwindConfig().theme.colors.orange[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.orange[600],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
      {
        label: "Supervision",
        data: Array(5).fill(overallRatings["Supervision"]),
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
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Weekly Report for RIC Self Motivation
        </h2>
      </header>
      {/* Conditional rendering based on isLoading and overall data */}
      {isLoading ? (
        <p>Loading...</p>
      ) : !overall || !overall["overall"] ? (
        <p className="text-center m-auto text-gray-700 text-sm">There is no data yet</p>
      ) : (
        // Render the bar chart if overall data is available
        <div className="p-6">
          <Bar
            data={chartData}
            options={{
              indexAxis: "x",
              plugins: {
                legend: {
                  position: "bottom",
                },
              },
            }}
          />
        </div>
      )}
    </div>
  );
}

export default DashboardCard04;
