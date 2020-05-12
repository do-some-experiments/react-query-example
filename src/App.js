import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

import './App.css';

function App() {
  const fetchPokemons = async () => {
    const data = await axios({
      url: 'https://pokeapi.co/api/v2/pokemon/',
    });

    return data;
  };

  const { status, isStale, isFetching, error, data } = useQuery(
    'pokemon',
    fetchPokemons
  );

  console.log(status, isStale, isFetching, error, data);

  return (
    <div>
      {data?.data.results.map(({ name }) => (
        <p>{name}</p>
      ))}
    </div>
  );
}

export default App;
