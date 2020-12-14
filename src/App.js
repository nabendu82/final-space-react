import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/Header';
import CardGrid from './components/CardGrid';

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://finalspaceapi.com/api/v0/character/`)
      console.log(result.data)
      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [])

  return (
    <div className="container">
      <Header />
      <CardGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
