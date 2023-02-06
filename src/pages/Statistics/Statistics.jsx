import React from "react";
import PieChart from "../../components/PieChart/PieChart";
import { useState, useEffect } from "react";

const formatData = (genreCount) => {
	return {
		labels: ["genre 1", "genre 2", "genre 3", "genre 4", "genre 5"],
		datasets: [
			{
				label: "Distribution of Genres",

				data: genreCount,
				backgroundColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
				],
				borderWidth: 1,
			},
		],
	};
};

function extractGenreCount(masterList) {
	const g = [0, 0, 0, 0, 0];
	masterList.forEach((artwork) => {
		switch (artwork.cat) {
			case "Painting":
				g[0]++; // increment the value in index 0 of g by 1
				break;
			case "Pottery":
				g[1]++; // increment the value in index 1 of g by 1
				break;
			case "Modernism":
				g[2]++; // increment the value in index 2 of g by 1
				break;
			case "Surrealism":
				g[3]++; // increment the value in index 3 of g by 1
				break;
			case "Poetry":
				g[4]++; // increment the value in index 4 of g by 1
				break;
			default:
				break;
		}
	});
	return g;
}
const Statistics = ({ masterList }) => {
	const genreCount = extractGenreCount(masterList);
	return (
		<div className="page-container">
			<h2>Statistics</h2>
			<PieChart formattedData={formatData(genreCount)} />
		</div>
	);
};

export default Statistics;
