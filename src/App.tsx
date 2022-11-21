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
				<Route path="/" element={<Reviews />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</div>
		<Footer />
	</>;
}
