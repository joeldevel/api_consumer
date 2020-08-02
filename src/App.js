import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import CharacterGrid from './components/characters/CharacterGrid';


import './App.css';

function App()  {
  // Use the hooks
  const [ items, setItems ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(()=>{
    async function fetchData() {
      const fetchItems = await fetch('https://breakingbadapi.com/api/characters');
      const result = await fetchItems.json();
      console.log( result[0] );
      setItems( result );
      setIsLoading( false );
    }
    fetchData();
  } , [])
  return (
    <div className="container">
      <Header />
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
}

export default App;
