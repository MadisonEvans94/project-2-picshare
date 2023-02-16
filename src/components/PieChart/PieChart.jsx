import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./PieChart.css";
ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
	labels: ["genre 1", "genre 2", "genre 3", "genre 4", "genre 5", "genre 6"],
	datasets: [
		{
			label: "Distribution of Genres",

			data: [12, 19, 3, 5, 2, 3],
			backgroundColor: [
				"rgba(255, 99, 132, 1)",
				"rgba(54, 162, 235, 1)",
				"rgba(255, 206, 86, 1)",
				"rgba(75, 192, 192, 1)",
				"rgba(153, 102, 255, 1)",
				"rgba(255, 159, 64, 1)",
			],
			borderColor: [
				"rgba(255, 99, 132, 1)",
				"rgba(54, 162, 235, 1)",
				"rgba(255, 206, 86, 1)",
				"rgba(75, 192, 192, 1)",
				"rgba(153, 102, 255, 1)",
				"rgba(255, 159, 64, 1)",
			],
			borderWidth: 1,
		},
	],
};

//TODO: In final implemenation, userData will be used for prop of Pie, not the dummy data
/**
 *
 * @param {prop} userData: userData an array of like counts. Each index corresponds to a specific genre i/e: [1,0,3,6,7] means that
 * genre 1 had 1 likes, genre 2 has 0 likes, genre 3 has 3 likes etc
 * @returns
 */
const PieChart = ({ userData }) => {
	return (
		<>
			<div className="pie-container">
				<Pie data={data} />
			</div>
		</>
	);
};

export default PieChart;
