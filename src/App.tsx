import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Reviews from "./Components/Reviews";
import { Routes, Route } from "react-router-dom";
import Login from "./layout/Login";
import Register from "./layout/Register";

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
