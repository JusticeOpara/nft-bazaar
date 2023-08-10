import { useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        headers: {
          accept: 'application/json',
          'X-API-KEY': 'ca66968a9b6740e081bb3b8b050b2bf6',
        },
      };

      try {
        // fetch()
        const response = await axios.get('https://api.opensea.io/v2/listings/collection/cool-cats-nft/all?limit=50', options);
        console.log(response.data); // Display the API response data
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);


  return (
    // <BrowserRouter>

    <div>
      <Navbar />
      <Home />
    </div>

    // </BrowserRouter>

  );
};

export default App;


