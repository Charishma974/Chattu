import { ArcElement, CategoryScale, Chart as ChartJS, Filler, Legend, LineElement, LinearScale, PointElement, Tooltip } from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
import { purple, purpleLight } from "../../constants/color";
import { getLast7Days } from "../../lib/features";

ChartJS.register(
    Tooltip,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Filler,
    ArcElement,
    Legend
);

const labels = getLast7Days();

const lineChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        }
    },
    scales: {
        x: {
            grid: {
                display: false,
            }
        },
        y: {
            beginAtZero: true,
            grid: {
                display: false,
            }
        }
    }
};

const LineChart = ({value=[]}) => {

    const data = {
        labels,
        datasets: [
            {
                data: value,
                label: "Revenue",
                fill: true,
                backgroundColor: purpleLight,
                borderColor: purple,
            }
        ],
    }

    return <Line data={data} options={lineChartOptions} />;
}

const DoughnutChart = () => {
    return (
        <div>Charts</div>
    )
}

export { DoughnutChart, LineChart };
