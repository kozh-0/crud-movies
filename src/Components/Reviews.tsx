import axios from "axios";
import { useState } from "react";
import { Itable, URL } from "../App";


export default function Reviews({ data, setData }: { data: Itable[], setData: any }) {
    const [newReview, setNewReview] = useState('');

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
    return (
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
    )
}
