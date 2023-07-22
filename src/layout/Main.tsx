import { useState } from 'react';
import { useEffect } from 'react';
import Movies from '../components/Movies';
import Search from '../components/Search';
import Preloader from '../components/Preloader';
import { API_KEY } from '../constUrl';

interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }

const Main = (): JSX.Element => {
    const [ movies, setMovies ] = useState<Movie[]>([]);
    const [ isLoading, setLoading ] = useState<boolean>(true);

    useEffect(() => 
      function getMovies() {
          fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
          .then((response) => response.json())
          .then((data) =>
              {setMovies(data.Search);
              setLoading(false);}
          )
          .catch((err) => {
              console.error(err);
              setLoading(false)
          });

      }, []
    );

    function searchMovies(str: string | undefined, type: string = 'all') {
      setLoading(true);
      fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
              type !== 'all' ? `&type=${type}` : ''
          }`
      )
          .then((response) => response.json())
          .then((data) => {
              setMovies(data.Search); 
              setLoading(false)}
          )
          .catch((err) => {
              console.error(err);
              setLoading(false);
          });
  }
  
      return (
        <main className='container content'>
          <Search searchMovies={searchMovies} />
          {isLoading ? <Preloader /> : <Movies movies={movies} />}
        </main>
      );
    
}


export default Main;
