import { useState, useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Statistics from "./pages/Statistics/Statistics";
import UploadPage from "./pages/UploadPage/UploadPage";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
	const [masterList, setMasterList] = useState([]);
	const [searchText, setSearchText] = useState("");

	useEffect(() => {
		fetch("http://localhost:3000/items")
			.then((res) => res.json())
			.then((data) => setMasterList(data));
	}, []);

	// Search
	function onHandleSearch(input) {
		setSearchText(input);
	}

	// Add new item
	function onAddItem(newItem) {
		setMasterList([...masterList, newItem]);
	}

	const searchResults = masterList.filter(
		(list) =>
			list.name.toLowerCase().includes(searchText.toLowerCase()) ||
			list.artist.toLowerCase().includes(searchText.toLowerCase())
	);

	return (
		<>
			<Router>
				<Nav />

				<Routes>
					<Route
						exact
						path="/"
						element={
							<Home
								searchResults={searchResults}
								onHandleSearch={onHandleSearch}
							/>
						}
					/>
					<Route
						path="/upload"
						element={<UploadPage onAddItem={onAddItem} />}
					/>
					<Route
						path="/statistics"
						element={<Statistics masterList={masterList} />}
					/>
				</Routes>
			</Router>
		</>
	);
}

export default App;
