import React, { useState, useEffect } from 'react';
// import axios from 'axios';

import Header from './components/Header';

import './App.css';

function App()  {
  // Use the hooks
  const [ items, setItems ] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  useEffect(()=>{
    async function fetchData() {
      const fetchItems = await fetch('https://breakingbadapi.com/api/characters');
      const result = await fetchItems.json();
      console.log( result );
    }
    fetchData();
  } , [])
  return (
    <div className="container">
      <Header />
    </div>
  );
}

export default App;
