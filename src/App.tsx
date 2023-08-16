// import { useEffect } from 'react';
// import axios from 'axios';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Stats from './components/Stats';
import Collection from './components/Collection';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const options = {
  //       headers: {
  //         accept: 'application/json',
  //         'X-API-KEY': 'ca66968a9b6740e081bb3b8b050b2bf6',
  //       },
  //     };

  //     try {
  //       const response = await axios.get('https://api.opensea.io/v2/chain/bsc/account/0x5ff83cde915331b6ae6ae3b966b26b9de3614584/nfts?limit=50', options);

  //       // const response = await axios.get('https://api.opensea.io/v2/listings/collection/cool-cats-nft/all?limit=50', options);
  //       console.log(response.data);

  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   fetchData();
  // }, []);


  return (
    <BrowserRouter>

      <div>
        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path='/stats' element={<Stats />} />

          <Route path="/collection" element={<Collection />} />

        </Routes>

        
      </div>

    </BrowserRouter>

  );
};

export default App;


