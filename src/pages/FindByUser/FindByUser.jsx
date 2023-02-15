import React from "react";
import Card from "../../components/Card/Card";
import CardList from "../../components/CardList/CardList";

const FindByUser = ( {onHandleSearch, searchResults} ) => {

	function handleSearchArtist(e) {
		const value = e.target.value
		onHandleSearch(value)
	}


	const renderCards = searchResults.map(card => 
			<li>
				<Card
					key = {card.id}
					id = {card.id}
					name = {card.name}
					artist = {card.artist}
					image = {card.image}
					cat = {card.cat}
					des = {card.des}
					/>
			</li>
	)

	return (
		<>
			<div className="search-bar">
				<input type="text"
					placeholder="Search artist..." 
					onChange={handleSearchArtist}
				/>
			</div>
			<div>
				<ul>
					{renderCards}
				</ul>
			</div>
		</>

		
	);
};

export default FindByUser;

