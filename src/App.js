import React, { useEffect, useState} from "react";
import tmdb from './tmdb';
import MovieRow from "./components/MovieRow";

export default () => {

  const [movielist, setMovieList] = useState([]);

  useEffect(() =>{
    const loadAll = async () => {
      //pegando a lista TOTAL
      let list = await tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="lists">
        {movielist.map((item, key)=>(
          <MovieRow key={key} tittle={item.tittle} items={item.items} />
        ))}
      </section>      
    </div>
  );
}