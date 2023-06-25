import { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards';

function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=100')
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div className="container">
      <div>
        <h1>Header</h1>
      </div>

      <Cards data={images} />
    </div>
  );
}

export default App;
