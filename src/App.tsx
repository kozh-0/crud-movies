import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Reviews from "./Components/Reviews";
export const URL = 'http://localhost:3001/reviews';

export interface Itable {
	id: number;
	movieName: string;
	movieReview: string;
}

export default function App() {
	const [data, setData] = useState<Itable[]>([]);


	useEffect(() => {
		axios(`${URL}/get`).then(res => setData(res.data));
	}, []);

	return <>
		<Header />
			<div className="App">
				<h1>Movie Reviews</h1>
				<Input data={data} setData={setData} />

				<Reviews data={data} setData={setData} />
			</div>
		<Footer />
	</>;
}
