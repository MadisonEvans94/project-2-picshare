import React from "react";
import "./Card.css";
const Card = () => {
	return (
		<div className="card-container glass">
			<img src={"../../assets/test-images/test-image.jpg"} alt="test" />
			<h2>Blue Cloud</h2>
			<p>this is my artwork!</p>
			<p>Genre: Futurism</p>
		</div>
	);
};

export default Card;
