import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../../components/card/Card";
import Genre from "../../components/genre/Genre";
import PaginationCom from "../../components/pagination/Pagination";
import useGenre from "../../customHook/useGenre";
import "./Series.css";
const Movies = () => {
  const [series, setSeries] = useState([]);
  const [page, setPage] = useState([]);
  const [genre, setGenre] = useState([]);
  const [selectedGenre,setSelectedGenre]=useState([])
  const [totalPages, setTotalPages] = useState();

 

  const genreforURL =useGenre(selectedGenre)
  console.log(genreforURL)

  useEffect(() => {
    fetchSeries();
    // eslint-disable-next-line
  }, [page]);

  const fetchSeries = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=5c1a7f84b13a314e22aed4a212650c0d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`
    );
    setSeries(data.results);
    let p = data.total_pages;
    setTotalPages(p);
  };
  return (
    <div className="movie">
      <h2 className="top-title">Movies</h2>
      <Genre type="tv" genre={genre} setGenre={setGenre} selected={selectedGenre} setSelected={setSelectedGenre} setPage={setPage}/>
      <div className="card-container">
        {
          series?.map((series) => (
            <Card
              image={series.poster_path}
              id={series.id}
              key={series.id}
              title={series.title}
              rating={series.vote_average}
              type={genre.name}
              date={series.first_air_date}
              media='TV Show'
            />
          ))}
      </div>

      <PaginationCom page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default Movies;
