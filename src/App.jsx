import { useState, useEffect } from 'react';
import './App.css';
import Cards from './components/Cards';

function App() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.thecatapi.com/v1/images/search?limit=30&order=RAND&api_key=live_cgbnvGYxl5EVwY8r0pUuGVWS9bMJetTGIih83sj9tfkS3Yjbn0TJwWiL00UDMlnL'
    )
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div className="container">
      <div>
        <h1>CatList</h1>
      </div>

      <Cards data={images} />
    </div>
  );
}

export default App;
