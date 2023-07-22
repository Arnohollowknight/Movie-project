
interface MovieProps {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }

const Movie = (props: MovieProps): JSX.Element => {
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster,
    } = props;

    return (
        <div id={id} className='card movie'>
            <div className='card-image waves-effect waves-block waves-light'>
                {poster === 'N/A' ? (
                    <img
                        className='activator'
                        src={`https://via.placeholder.com/300x400?text=${title}`}
                    alt="Movie poster" width="300" height="450"/>
                ) : (
                    <img className='activator' src={poster} alt="Movie poster" width="300" height="450"/>
                )}
            </div>
            <div className='card-content'>
                <span className='card-title activator grey-text text-darken-4'>
                    {title}
                </span>
                <p>
                    {year} <span className='right'>{type}</span>
                </p>
            </div>
        </div>
    );
}
export {Movie};
export type {MovieProps};
