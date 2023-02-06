import React from "react";
import PieChart from "../../components/PieChart/PieChart";
import { useState } from "react";
const Statistics = ({ masterList }) => {
	const [formattedData, setFormattedData] = useState({
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
	});
	function formatData(masterList) {
		/**
		 * take the database object: [{},{},{}] ... and use it to fill out the data attribute in formattedData
		 
		 */
		return null;
	}
	return (
		<div className="page-container">
			<h2>Statistics</h2>
			<PieChart formattedData={formattedData} />
		</div>
	);
};

export default Statistics;
