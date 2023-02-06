import React from "react";
import "./Card.css";
import testImage from "../../assets/test-images/test-image.jpg";
import { useState } from "react";

const Card = () => {
	const [likes, setLikes] = useState(0);
	/**
	 * TODO: in future iteration, the likes will be persistent in database.
	 * the like state pertains to singular instance of like. Will need to have a useEffect hook
	 * that implements a patch request. page will optimistically render based on if user has
	 * liked or disliked the post
	 */

	function handleLike() {
		console.log("liked");
	}

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
			<div className="like-button" onClick={handleLike}>
				+
			</div>
		</div>
	);
};

export default Card;
