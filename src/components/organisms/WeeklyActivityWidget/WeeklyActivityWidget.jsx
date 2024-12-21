import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const WeeklyActivityWidget = () => {
  const [chartData, setChartData] = useState(null);
  const options = {
    responsive: true, // Ensure chart is responsive
    maintainAspectRatio: false, // Prevent aspect ratio issue
    plugins: {
      legend: {
        position: "top",
        align: "end",
        display: true, // Turn off the legend
        labels: {
          color: "rgba(113, 142, 191, 1)",
          usePointStyle: true, // Use pointStyle for legend
          boxHeight: 10,
          pointStyle: "circle", // Set the point style to circle
          font: {
            family: "Inter",
            weight: "400",
            size: "15",
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "rgba(113, 142, 191, 1)",
          font: {
            family: "Inter",
            weight: "400",
            size: "13",
          },
        },
        grid: {
          display: false, // Disable the x-axis grid lines
        },
        border: {
          color: "rgba(255, 255, 255, 1)",
        },
        color: "rgba(223, 229, 238, 1)", // Color of the grid lines
      },
      y: {
        ticks: {
          stepSize: 100, // Increase the gap between tick values
          color: "rgba(113, 142, 191, 1)",
          font: {
            family: "Inter",
            weight: "400",
            size: "13",
          },
        },
        border: {
          color: "rgba(255, 255, 255, 1)",
        },
      },
    },
  };

  useEffect(() => {
    setChartData({
      labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
      datasets: [
        {
          label: "Deposit",
          data: [450, 400, 300, 500, 333, 423, 345],
          backgroundColor: "rgba(35, 35, 35, 1)",
          borderRadius: 10,
          borderSkipped: false,
          barPercentage: 0.6, // Adjust the thickness of bars
          categoryPercentage: 0.5, // Decrease
        },
        {
          label: "Withdraw",
          data: [200, 100, 200, 300, 233, 223, 145],
          backgroundColor: "rgba(57, 106, 255, 1)",
          borderRadius: 10,
          borderSkipped: false,
          barPercentage: 0.6, // Adjust the thickness of bars
          categoryPercentage: 0.5, // Decrease
        },
      ],
    });
  }, []);

  return (
    <div className="flex flex-col gap-[12px] lg:gap-[20px]">
      <div className="heading-text text-lg lg:text-xl">Weekly Activity</div>
      <div className="bg-white rounded-[25px] px-[18px] py-[14px] lg:px-[25px] lg:py-[35px] flex flex-col gap-[12px] lg:gap-[10px] h-[332px]">
        {chartData && <Bar options={options} data={chartData}></Bar>}
      </div>
    </div>
  );
};

export default WeeklyActivityWidget;
