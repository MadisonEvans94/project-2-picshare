import React from "react";
import CardList from "../../components/CardList/CardList";
import SearchBar from "../../components/Search/SearchBar";

const Home = ({ searchResults, onHandleSearch }) => {
	return (
		<div className="page-container">
			<SearchBar onHandleSearch={onHandleSearch} />
			<CardList list={searchResults} />
		</div>
	);
};

export default Home;
