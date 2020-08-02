import React, { useState} from 'react';

function Search( { getQuery }) {

  const [ text, setText ] = useState('');

  const onChange = ( query ) => {
    setText( query );
    getQuery( query );
  }
  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          value={text}
          onChange={ (e) => onChange( e.target.value )}
          placeholder='search something'
          />
      </form>
    </section>
  )
}

export default Search
