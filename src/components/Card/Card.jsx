import React from "react";
import "./Card.css";
import testImage from "../../assets/test-images/test-image.jpg";
import { useState } from "react";

const Card = ({id, name, image, artist, cat, des}) => {
	const [likes, setLikes] = useState(0);
	/**
	 * TODO: in future iteration, the likes will be persistent in database.
	 * the like state pertains to singular instance of like. Will need to have a useEffect hook
	 * that implements a patch request. page will optimistically render based on if user has
	 * liked or disliked the post
	 */

const [favorite, setFavorite] = useState(false);
const [favText, setFavText] = useState("Add Favorite")


	function handleLike() {
		
	} 



	function handleFav() {
		favorite ? setFavText("Add Favorite") : setFavText("Remove Favorite")
		return setFavorite(!favorite)
		
	}

	

	return (
		<div className="card-container glass favorite">
			<img
				className="image"
				style={{
					width: "100%",
					backgroundColor: "gray",
				}} src = {image}
			/>
				<h2>{name}</h2>
				<p>Artist: {artist}</p>
				<p>Genre: {cat}</p>
				<p>Description: {des}</p>
				<div>
			</div>
			<button id = {favText} className ="like-button" onClick = {handleFav} value={favorite}>{favText}</button> 
		</div>
	);
};

export default Card;
