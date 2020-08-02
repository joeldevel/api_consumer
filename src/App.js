import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/Search';


import './App.css';

function App()  {
  // Use the hooks
  const [ items, setItems ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);
  const [ query, setQuery ] = useState('');

  useEffect(()=>{
    async function fetchData() {
      const fetchItems = await fetch(`https://breakingbadapi.com/api/characters?name=${query}`);
      const result = await fetchItems.json();
      console.log( result[0] );
      setItems( result );
      setIsLoading( false );
    }
    fetchData();
  } , [ query ])
  return (
    <div >
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
