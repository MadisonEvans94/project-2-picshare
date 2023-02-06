import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Statistics from "./pages/Statistics/Statistics";
import FindByUser from "./pages/FindByUser/FindByUser";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Router>
				<Nav />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/find-by-user" element={<FindByUser />} />
					<Route path="/statistics" element={<Statistics />} />
				</Routes>
				<Home />
			</Router>
		</>
	);
}

export default App;
