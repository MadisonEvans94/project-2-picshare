import React from "react";
import "./Card.css";
import testImage from "../../assets/test-images/test-image.jpg";
const Card = () => {
	return (
		<div className="card-container glass">
			<div
				style={{
					backgroundImage: `${testImage}`,
					width: "200px",
					height: "200px",
					backgroundColor: "gray",
				}}></div>
			<h2>Blue Cloud</h2>
			<p>this is my artwork!</p>
			<p>Genre: Futurism</p>
		</div>
	);
};

export default Card;
