import React from "react";
import CardList from "../../components/CardList/CardList";

// [ ]: make templist a list of cards..

const templist = [1, 1, 1, 1, 1];
const Home = () => {
	return (
		<div className="page-container">
			<CardList list={templist} />
		</div>
	);
};

export default Home;
