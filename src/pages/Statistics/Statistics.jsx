import React from "react";
import PieChart from "../../components/PieChart/PieChart";
import "./Statistics.css";
const formatData = (masterList) => {
	const genreCount = [0, 0, 0, 0, 0, 0];
	masterList.forEach((artwork) => {
		switch (artwork.cat) {
			case "Painting":
			case "Sculpture":
			case "Pottery":
			case "Modern Art":
			case "Surrealism":
			case "Digital Art":
				genreCount[
					[
						"Painting",
						"Sculpture",
						"Pottery",
						"Modern Art",
						"Surrealism",
						"Digital Art",
					].indexOf(artwork.cat)
				]++;
				break;
			default:
				break;
		}
	});
	return {
		labels: [
			"Painting",
			"Sculpture",
			"Pottery",
			"Modern Art",
			"Surrealism",
			"Digital Art",
		],
		datasets: [
			{
				label: "Number of Posts",
				data: genreCount,
				backgroundColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(53, 20, 255, 1)",
				],
				borderColor: [
					"rgba(255, 99, 132, 1)",
					"rgba(54, 162, 235, 1)",
					"rgba(255, 206, 86, 1)",
					"rgba(75, 192, 192, 1)",
					"rgba(153, 102, 255, 1)",
					"rgba(53, 20, 255, 1)",
				],
				borderWidth: 1,
			},
		],
	};
};

const Statistics = ({ masterList }) => {
	return (
		<div className="stats-container">
			<h2>Genre Stats</h2>
			<PieChart formattedData={formatData(masterList)} />
		</div>
	);
};

export default Statistics;
