import React, { useEffect} from "react";
import tmdb from './tmdb';

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
      
      
    </div>
  );
}