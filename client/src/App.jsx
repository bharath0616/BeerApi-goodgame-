import React, { useState, useEffect } from 'react';
import './index.css';

export default function App() {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://api.sampleapis.com/beers/ale')
      .then(response => response.json())
      .then(setBeers)
      .catch(console.error);
  }, []);

  const filteredBeers = beers.filter(beer =>
    beer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App  p-5">
    <div className='flex justify-center '>
      <input
        type="text"
        placeholder="Search beers..."
        className="mb-4 p-2 border border-gray-500 rounded"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      </div>
      <div className="grid grid-cols-3 gap-4">
        {filteredBeers.map(beer => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  );
}

function BeerCard({ beer }) {
  return (
    <div className="flex flex-col justify-between bg-gray-100 p-4 sm:p-6 rounded-2xl shadow">
    <img src={beer.image} alt={beer.name} className="w-full h-64 object-contain rounded-lg mb-2 sm:mb-4" />
    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{beer.name}</h3>
    <p className="text-xs sm:text-sm text-gray-700">{beer.description}</p>
</div>


  
  );
}
