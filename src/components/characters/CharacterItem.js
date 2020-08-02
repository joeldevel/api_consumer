import React from 'react';

function CharacterItem( { item }) {
  return (
    <div className='card'>
     <h2>{ item.name}</h2>
      <img src={item.img} />
    </div>
  )
}

export default CharacterItem
