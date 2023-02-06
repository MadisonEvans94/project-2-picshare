import React from "react";
import PieChart from "../../components/PieChart/PieChart";
import { useState, useEffect } from "react";

function countGenres(masterList) {
	let tempGenres = {
		genre1: 0,
		genre2: 0,
		genre3: 0,
		genre4: 0,
		genre5: 0,
		genre6: 0,
	};
	masterList.forEach((obj) => {
		switch (obj.cat) {
			case "Sculpture":
				tempGenres = { ...tempGenres, genre1: tempGenres.genre1 + 1 };
				break;
			case "Painting":
				tempGenres = { ...tempGenres, genre2: tempGenres.genre2 + 1 };
				break;
			case "Pottery":
				tempGenres = { ...tempGenres, genre3: tempGenres.genre3 + 1 };
				break;
			default:
				break;
		}
	});
	return tempGenres;
}
const Statistics = ({ masterList }) => {
	const [genreCount, setGenreCount] = useState({
		genre1: 0,
		genre2: 0,
		genre3: 0,
		genre4: 0,
		genre5: 0,
		genre6: 0,
	});
	const formattedData = {
		labels: ["genre 1", "genre 2", "genre 3", "genre 4", "genre 5", "genre 6"],
		datasets: [
			{
				label: "Distribution of Genres",

				data: [],
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

	useEffect(() => {
		const temp = countGenres(masterList);
		setGenreCount(temp);
	}, [masterList]);

	return (
		<div className="page-container">
			<h2>Statistics</h2>
			<PieChart formattedData={formattedData} />
		</div>
	);
};

export default Statistics;
