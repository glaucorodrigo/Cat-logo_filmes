import React, { useEffect, useState} from "react";
import tmdb from './tmdb';
import './App.css';
import MovieRow from "./components/MovieRow";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";
import rodape_linkedin from './components/imagens/linkedin_icone.png';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const[featuredData, setFeaturedData] = useState(null);

  useEffect(() =>{
    const loadAll = async () => {
      //pegando a lista TOTAL
      let list = await tmdb.getHomeList();
      setMovieList(list);

      // Pegando o Featured
      let originals = list.filter(i=>i.slug ==='originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);      
    }

    loadAll();
  }, []);

  return (
    <div className="page">

      <Header />

      {featuredData &&
      <FeaturedMovie item={featuredData} />
      }


      <section className="lists">
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>   
        <footer>
        <p>Desenvolvido por Glauco Rodrigo</p>
	      <a href="https://www.linkedin.com/in/glauco-rodrigo/" target="_blank"><img class="icone1" src={rodape_linkedin} /></a><br/>
        Direitos de imagem para Netflix<br/>
        Dados pegos do site Themoviedb.org
        </footer>   
    </div>
  );
}