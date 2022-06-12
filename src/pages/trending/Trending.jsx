import React, { useState, useEffect } from "react";
import "./Trending.css";

import Card from "../../components/card/Card";
import axios from "axios";
import PaginationCom from "../../components/pagination/Pagination";

const Trending = () => {
  const [trend, setTrend] = useState();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const API_URL = `https://api.themoviedb.org/3/trending/all/week?api_key=5c1a7f84b13a314e22aed4a212650c0d&page=${page}`;

  useEffect(() => {
    fetchTrend();
  }, [page]);

  const fetchTrend = async () => {
    const { data } = await axios.get(API_URL);
    setTrend(data.results);
    let p = data.total_pages;
    setTotalPages(p);
  };

  return (
    <div className="trending">
      <h2 className="top-title">Trending</h2>
      <div className="card-container">
        {trend &&
          trend.map((c) => (
            <Card
              title={c.title || c.name}
              key={c.id}
              id={c.id}
              rating={c.vote_average}
              image={c.poster_path}
              overview={c.overview}
              media={c.media_type}
              genre={c.genre_ids}
              trend={trend}
              date={c.release_date || c.first_air_date}
            />
          ))}
      </div>

      <PaginationCom page={page} setPage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default Trending;
