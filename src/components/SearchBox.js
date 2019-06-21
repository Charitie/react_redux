import React from 'react';



const SearchBox = ({ searchfield, SearchChage}) => {
    return (
        <div className='tc' style={{marginBottom: 10}}>
            <input 
                className = 'pa3 ba b--blue bg-light-blue'
                style={{borderRadius: 20}}
                type='search' 
                placeholder='search for a robopal'
                onChange={SearchChage}
            />
        </div>
    );
}

export default SearchBox;
