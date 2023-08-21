
import Navbar from './components/Navbar';
import Home from './components/Home';
import Stats from './components/Stats';
import Community from './components/Community';
import Collection from './components/Collection';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './components/Create';



const App = () => {

  return (
    <BrowserRouter>
    
         <div className='bdg-[#212529] 
          mrax-w-[2520px]
          r-auto
          xrl:px-18
          mrd:px-10
          srm:px-2
          prx-20
          font-poppins'> 
          <Navbar />

          <Routes>

            <Route path="/" element={<Home />} />

            <Route path='/stats' element={<Stats />} />

            <Route path="/collection" element={<Collection />} />

             <Route path="/create" element={<Create/>}/> 

             <Route path="/community" element={<Community/>}/>

          </Routes>


       </div> 
      
    </BrowserRouter>

  );
};

export default App;


