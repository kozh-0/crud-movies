import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Reviews from "./Pages/Reviews";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

export default function App() {

	return <>
		<Header />
		<div className="App">
			<Routes>
				<Route path="/crud-movies" element={<Reviews />} />
				<Route path="/crud-movies/login" element={<Login />} />
				<Route path="/crud-movies/register" element={<Register />} />
			</Routes>
		</div>
		<Footer />
	</>;
}
