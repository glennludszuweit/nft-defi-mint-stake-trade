import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "2021 Market Actions",
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const data = {
  labels,
  datasets: [
    {
      label: "Sell",
      data: labels.map((label, index) => index + 1),
      backgroundColor: "#f4a261",
    },
    {
      label: "Buy",
      data: labels.map((label, index) => index + 1),
      backgroundColor: "#5F7A61",
    },
  ],
};

export const BarChart = () => {
  return <Bar options={options} data={data} />;
};

export const LineChart = () => {
  return <Line options={options} data={data} />;
};
