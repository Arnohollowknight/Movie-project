import { Movie, MovieProps } from './Movie';


interface MoviesProps {
    movies: MovieProps[];
};

const Movies = (props: MoviesProps): JSX.Element => {
    const { movies = [] } = props;

    return (
        <div className='movies'>
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
            ) : (
                <h4>Nothing found</h4>
            )}
        </div>
    );
}
export default Movies;
