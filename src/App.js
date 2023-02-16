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

	useEffect(() => {
		fetch("http://localhost:3200/items")
			.then((res) => res.json())
			.then((data) => setMasterList(data));
	}, []);

	return (
		<>
			<Router>
				<Nav />

				<Routes>
					<Route exact path="/" element={<Home masterList={masterList} />} />
					<Route path="/find-by-user" element={<UploadPage />} />
					<Route path="/statistics" element={<Statistics />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
