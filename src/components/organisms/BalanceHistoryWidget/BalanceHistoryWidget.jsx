import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import * as Utils from "chart.js/helpers";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const datapoints = [150, 400, 300, 500, 450, 680, 380, 660];
const datapointsMonth = [6, 7, 8, 9, 10, 11, 0, 1];
const months = datapointsMonth.map((value, index) => {
  const date = new Date();
  date.setMonth(value); // Increment the month
  if (index < datapointsMonth.length - 1)
    return date.toLocaleString("default", { month: "short" }); // Short month name (e.g., Jan, Feb, etc.)
  return ""; //Not showing the last month on x-axis
});

const BalanceHistoryWidget = () => {
  const [chartData, setChartData] = useState(null);
  const options = {
    responsive: true, // Ensure chart is responsive
    maintainAspectRatio: false, // Prevent aspect ratio issue
    plugins: {
      legend: {
        display: false, // Turn off the legend
      },
    },
    scales: {
      x: {
        ticks: {
          color: "rgba(113, 142, 191, 1)",
        },
        border: {
          dash: [5, 5], // Dashed grid lines (5px dash, 5px gap)
        },
        color: "rgba(223, 229, 238, 1)", // Color of the grid lines
      },
      y: {
        ticks: {
          stepSize: 200, // Increase the gap between tick values
          color: "rgba(113, 142, 191, 1)",
        },
        border: {
          dash: [5, 5], // Dashed grid lines (5px dash, 5px gap)
        },
        color: "rgba(223, 229, 238, 1)", // Color of the grid lines
      },
    },
  };

  useEffect(() => {
    setChartData({
      labels: months,
      datasets: [
        {
          label: "Balance",
          data: datapoints,
          borderColor: "rgba(24, 20, 243, 1)",
          backgroundColor: (context) => {
            const { ctx } = context.chart;
            const gradient = ctx.createLinearGradient(0, 0, 0, 200);
            gradient.addColorStop(0, "rgba(45, 96, 255, 0.25)");
            gradient.addColorStop(0.9, "rgba(45, 96, 255, 0)");
            return gradient;
          },
          fill: true, // Enable filling the area below the line
          cubicInterpolationMode: "monotone",
          tension: 0.4,
          pointRadius: 1,
        },
      ],
    });
  }, []);

  return (
    <div className="flex flex-col gap-[12px] lg:gap-[20px]">
      <div className="heading-text text-lg lg:text-xl">Balance History</div>
      <div className="bg-white rounded-[25px] px-[18px] py-[14px] lg:px-[25px] lg:py-[35px] flex flex-col gap-[12px] lg:gap-[10px] h-[276px]">
        {chartData && <Line options={options} data={chartData}></Line>}
      </div>
    </div>
  );
};

export default BalanceHistoryWidget;
