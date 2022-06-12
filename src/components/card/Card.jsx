import React from "react";
import "./Card.css";
const Card = ({ title, rating, image, overview, genre, media,trend,date }) => {


  return (
    <div className="card">
      <div className={rating >=6 ?'rating good':'rating bad'}>{rating}</div>

      <div className="image">
        <img src={`https://image.tmdb.org/t/p/w500${image}`} alt="title" />
      </div>
      <div className="name">
        <span className="title">{title}</span>
        <span className="overview">{overview}</span>
      </div>
      <div className="kind">
        <span className={media ==='tv'?'tv':'movie'}>{media}</span>
        <span className="type ">{date}</span>
      </div>
    </div>
  );
};

export default Card;
