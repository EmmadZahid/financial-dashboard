import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";
import { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(Tooltip, Legend, ArcElement);
const ExpenseWidget = () => {
  const [chartData, setChartData] = useState(null);
  const options = {
    responsive: true, // Ensure chart is responsive
    maintainAspectRatio: false, // Prevent aspect ratio issue
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: "#fff", // Label color
        font: {
          size: 16,
          weight: "700",
        },
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex];
          return `${Math.round((value / 360) * 100)}% \n ${label}`; // Customize text (label + value)
        },
        anchor: "center", // Attach the label at the center of the arc
        align: "center", // Align the label relative to the center
        // offset: 50,
        textAlign: "center",
        // rotation: 45,
      },
    },
    rotation: 45,
  };
  useEffect(() => {
    setChartData({
      labels: ["Investment", "Entertainment", "Bill Expense", "Other"],
      datasets: [
        {
          label: "Expense",
          data: [54, 126, 108, 72],
          backgroundColor: [
            "rgba(252, 121, 0, 1)",
            "rgba(35, 35, 35, 1)",
            "rgba(57, 106, 255, 1)",
            "rgba(52, 60, 106, 1)",
          ],
        },
      ],
    });
  }, []);
  return (
    <div className="flex flex-col gap-[12px] lg:gap-[20px]">
      <div className="heading-text text-lg lg:text-xl">Expense Statistics</div>
      <div className="bg-white rounded-[25px] px-[18px] py-[14px] lg:px-[25px] lg:py-[35px] flex flex-col gap-[12px] lg:gap-[10px] h-[332px]">
        {chartData && (
          <Pie
            options={options}
            data={chartData}
            plugins={[ChartDataLabels]}
          ></Pie>
        )}
      </div>
    </div>
  );
};

export default ExpenseWidget;
