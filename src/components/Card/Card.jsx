import React from "react";
import "./Card.css";
import { useState, useEffect } from "react";

const Card = ({ id, name, image, artist, cat, des }) => {
	const [likes, setLikes] = useState(0);
	const [favorite, setFavorite] = useState(false);
	const [favText, setFavText] = useState("Add Favorite");

	useEffect(() => {
		fetch(`http://localhost:3200/items/${id}`)
			.then((res) => res.json())
			.then((data) => setFavorite(data.fav));
	}, []);

	useEffect(() => {
		fetch(`http://localhost:3200/items/${id}`)
			.then((res) => res.json())
			.then((data) => console.log(JSON.stringify(data.favText)));
	}, []);

	console.log(favorite, favText);
	function handlePatch() {
		fetch(`http://localhost:3200/items/${id}`, {
			method: "PATCH",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				fav: favorite,
			}),
		});
	}

	function handleLike() {
		setFavorite(!favorite);
		handleFavText();
		handlePatch();
		handleDivId();
	}


	function handleFavText() {
		if (favorite) {
			setFavText("Remove Favorite");
			handlePatch();
		} else {
			setFavText("Add Favorite");
			handlePatch();
		}
	}

	//[ ] this functionality might need a second look. Commenting out for now
	function handleDivId() {
		if (favorite) {
			const element = document.getElementById(`${id}`);
			return element.classList.add("favorite-card");
		} else {
			const element = document.getElementById(`${id}`);
			return element.classList.remove("favorite-card");
		}
	}

	// //// The function below stalled the app, not sure how else to get the class into the element.
	// handleDivId();

	return (
		<div id={id} className="card-container normal-card">
			<div className="image-div">
				<img
					className="image"
					style={{
						width: "100%",
						backgroundColor: "gray",
					}}
					src={image}
					alt="artwork"
				/>
			</div>
			<h4>{name}</h4>
			<li>Artist: {artist}</li>
			<li>Genre: {cat}</li>
			<li>Description: {des}</li>
			<button value={id} className="like-button" onClick={handleLike}>
				Toggle Favorite
			</button>
		</div>
	);
};

export default Card;
