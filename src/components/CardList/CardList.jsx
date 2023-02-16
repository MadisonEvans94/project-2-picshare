import React from "react";
import Card from "../Card/Card";
/**
 *
 * @param {*} list: a list of objects each containing the card's attributes
 * @returns
 */
const CardList = ({ list }) => {
	//const [cardList, setCardList] = useState([]);
	if (list === undefined) return <></>;

	//[ ] so far this is just dummy implementation
	const cardList = list.map((card) => {
		return (
				<Card
				key = {card.id}
				id = {card.id}
				name = {card.name}
				artist = {card.artist}
				image = {card.image}
				cat = {card.cat}
				des = {card.des}
				/>
		);
	});

	return <div>{cardList}</div>;
};

export default CardList;
