import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../../components/card/Card";
import Genre from "../../components/genre/Genre";
import PaginationCom from "../../components/pagination/Pagination";
import useGenre from "../../customHook/useGenre";
import "./Movies.css";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState([]);
  const [genre, setGenre] = useState([]);
  const [selectedGenre,setSelectedGenre]=useState([])
  const [totalPages, setTotalPages] = useState();

 

  const genreforURL =useGenre(selectedGenre)

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [page]);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=5c1a7f84b13a314e22aed4a212650c0d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    setMovies(data.results);
    let p = data.total_pages;
    setTotalPages(p);
  };
  return (
    <div className="movie">
      <h2 className="top-title">Movies</h2>
      <Genre type="movie" genre={genre} setGenre={setGenre} selected={selectedGenre} setSelected={setSelectedGenre} setPage={setPage}/>
      <div className="card-container">
        {movies &&
          movies.map((movie) => (
            <Card
              image={movie.poster_path}
              id={movie.id}
              key={movie.id}
              title={movie.title}
              rating={movie.vote_average}
              type={genre.name}
              date={movie.release_date}
              media='Movie'
            />
          ))}
      </div>

      <PaginationCom page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default Movies;
