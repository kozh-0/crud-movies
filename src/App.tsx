import axios from "axios";
import { useEffect, useState } from "react";
const URL = 'http://localhost:3001/api';

interface Itable {
	id: number;
	movieName: string;
	movieReview: string;
}

export default function App() {
	const [movieName, setMovieName] = useState('');
	const [movieReview, setMovieReview] = useState('');
	const [newReview, setNewReview] = useState('');
	const [data, setData] = useState<Itable[]>([]);

	const submitReview = () => {
		if (!movieName || !movieReview) return;
		axios.post(`${URL}/insert`, { movieName, movieReview });
		setData([...data, { movieName, movieReview, id: data[data.length - 1].id + 1 }]);
		setMovieName('');
		setMovieReview('');
	};

	const deleteReview = (movie: string) => {
		axios.delete(`${URL}/delete/${movie}`);
		setData(data.filter(el => el.movieName !== movie));
	};

	const updateReview = (e: any, movie: string) => {
		axios.put(`${URL}/update`, {
			movieName: movie,
			movieReview: newReview
		});
		setData(data.map(el => el.movieName === movie ? { ...el, movieReview: newReview } : el));
		e.target.value = '';
	};

	useEffect(() => {
		axios(`${URL}/get`).then(res => setData(res.data));
	}, []);
	console.log(data);

	return (
		<div className="App">
			<h1>Movie Reviews</h1>
			<div className="input_div">
				<input
					autoFocus
					placeholder="Movie name"
					value={movieName}
					onChange={(e) => setMovieName(e.target.value)}
				/>
				<input
					placeholder="Your review"
					value={movieReview}
					onChange={(e) => setMovieReview(e.target.value)}
				/>
				<button onClick={submitReview}>Submit</button>
			</div>

			<div className="reviews">
				{data.map((el, idx) => (
					<div key={el.id} className="reviews_item">
						<h3>{idx + 1}. {el.movieName}</h3>
						<p>{el.movieReview}</p>

						<button onClick={() => deleteReview(el.movieName)}>X</button>
						<input
							placeholder="Update review"
							onChange={(e) => setNewReview(e.target.value)}
							onKeyDown={(e) => { if (e.key === 'Enter') updateReview(e, el.movieName) }}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
