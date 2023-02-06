import React from "react";
import Card from "../Card/Card";
/**
 *
 * @param {*} list: a list of objects each containing the card's attributes
 * @returns
 */
const CardList = ({ list }) => {
	//[ ] so far this is just dummy implementation
	const cardList = list.map((card) => {
		return (
			<Card
				key={card.id}
				id={card.id}
				name={card.name}
				artist={card.artist}
				image={card.image}
				cat={card.cat}
				des={card.des}
				fav={card.fav}
			/>
		);
	});

	return <div class="card-list-container">{cardList}</div>;
};

export default CardList;
