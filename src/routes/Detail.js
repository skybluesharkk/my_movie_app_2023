import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Detail.css'

function Detail() {
	const { id } = useParams();
	const [movie, setMovie] = useState();
	const [loading, setLoading] = useState(true);

	const getMovie = async () => {
		const json = await await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		setMovie(json.data.movie);
		setLoading(false);
	};

	useEffect(() => {
		getMovie();
        // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className='movie-detail' id='1'>
			{loading ? (
				<div className='loading-area'>
					<span className='loading'>Loading..</span>
				</div>
			) : (
				<div className='movie' >
					<div className='title-area'>
						<h2 className='title'>{movie.title_long}</h2>
					</div>
					<div className='img-box'>
						<img src={movie.large_cover_image} alt={movie.title} />
					</div>
					<div className='content'>
						<div className='info-area'>
							<span className='movie-title'>{movie.title}</span>
							<span className='rating'>rating: {movie.rating}</span>
						</div>
						<div className='genres-area'>
							<ul className='genres-list'>
								{movie.genres.map((g) => (
									<li key={g}>{g}</li>
								))}
							</ul>
						</div>
						<div className='summary-area'>
							<p className='summary'>{movie.description_full}</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Detail;