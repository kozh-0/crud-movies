import axios from "axios";
import { useState } from "react";
import { Itable, URL } from "../App";

export default function Input({data, setData}: { data: Itable[], setData: any }) {
    const [movieName, setMovieName] = useState('');
	const [movieReview, setMovieReview] = useState('');
    const submitReview = () => {
		if (!movieName || !movieReview) return;
		axios.post(`${URL}/insert`, { movieName, movieReview });
		setData([...data, { movieName, movieReview, id: data[data.length - 1].id + 1 }]);
		setMovieName('');
		setMovieReview('');
	};
    return (
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
    )
}
