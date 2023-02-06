import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./PieChart.css";
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ formattedData }) => {
	console.log(formattedData);
	return (
		<>
			<div className="pie-container">
				<Pie data={formattedData} />
			</div>
		</>
	);
};

export default PieChart;
