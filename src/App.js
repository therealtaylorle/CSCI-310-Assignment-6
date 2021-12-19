import './App.css';
import { Button } from '@mui/material';
import React, { useState, useEffect } from "react";

const url = "https://api.quotable.io/random";

function App() {

  const [wisdom, setWisdom] = useState([]);

  const getWisdom = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setWisdom(data));
  };

  useEffect(() => {
    getWisdom();
  }, []);

  const newWisdom = () => {
    getWisdom();
  };

  const { content, author } = wisdom; 

  return (
    <div>
      <div className="center">
        <h1 className="title">Free Wisdom Generator</h1>
        <Button variant="contained" size="large" onClick={newWisdom}>
          Receive Wisdom
        </Button>
        <h3>{author}</h3>
        <p>{content}</p>
      </div>
    </div>  
  );
}

export default App;

