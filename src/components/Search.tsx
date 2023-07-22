import React, { useEffect } from 'react';
import { useState } from 'react';


interface SearchProps {
    searchMovies: (str: string | undefined, type?: string) => void;
  }

const Search = (props: SearchProps): JSX.Element => {

    const [ inputValue, setInputValue ] = useState('')
    const [ searchValue, setSearchValue ] = useState('matrix')
    const [ type, setType ] = useState('all')
    const {searchMovies: searchMovie} = props
    const  handleKey = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === 'Enter') {
            setSearchValue(inputValue);
            searchMovie(searchValue, type);
        }
    };
    const  handleFilter = (event: React.ChangeEvent<HTMLInputElement>): void => {
         setType(event.target.dataset.type || 'all');
    };
    
    useEffect(() => {
        searchMovie(searchValue, type);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [type, searchValue]) 
    return (
        <div className='row'>
            <div className='input-field'>
                <input
                    className='validate'
                    placeholder='search'
                    type='search'
                    value={inputValue}
                    onChange={(e) =>
                        setInputValue(e.target.value)
                    }
                    onKeyDown={handleKey}
                />
                <button
                    className='btn search-btn'
                    onClick={() =>
                        searchMovie(
                            searchValue,
                            type
                        )
                    }
                >
                    Search
                </button>
            </div>
            <div>
                <label>
                    <input
                        className='with-gap'
                        name='type'
                        type='radio'
                        data-type='all'
                        onChange={handleFilter}
                        checked={type === 'all'}
                    />
                    <span>All</span>
                </label>
                <label>
                    <input
                        className='with-gap'
                        name='type'
                        type='radio'
                        data-type='movie'
                        onChange={handleFilter}
                        checked={type === 'movie'}
                    />
                    <span>Movies only</span>
                </label>
                <label>
                    <input
                        className='with-gap'
                        name='type'
                        type='radio'
                        data-type='series'
                        onChange={handleFilter}
                        checked={type === 'series'}
                    />
                    <span>Series Only</span>
                </label>
            </div>
        </div>
    );
}



export default Search;
