import React from "react";
import PieChart from "../../components/PieChart/PieChart";
const formatData = (masterList) => {
	const genreCount = [0, 0, 0, 0, 0];
	masterList.forEach((artwork) => {
		switch (artwork.cat) {
			case "Painting":
			case "Pottery":
			case "Modernism":
			case "Surrealism":
			case "Poetry":
				genreCount[
					["Painting", "Pottery", "Modernism", "Surrealism", "Poetry"].indexOf(
						artwork.cat
					)
				]++;
				break;
			default:
				break;
		}
	});
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

const Statistics = ({ masterList }) => {
	return (
		<div className="page-container">
			<h2>Statistics</h2>
			<PieChart formattedData={formatData(masterList)} />
		</div>
	);
};

export default Statistics;
