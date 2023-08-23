import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

import Footer from './components/Footer';
import AnimatedRoutes from './pages/AnimatedRoutes';

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
          max-md:px-2
          font-poppins'>
        <Navbar />
        <AnimatedRoutes />

        <Footer />
      </div>

    </BrowserRouter>

  );
};

export default App;


