import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom';

import Footer from './components/Footer';
import AnimatedRoutes from './pages/AnimatedRoutes';

const App = () => {

  return (
    <BrowserRouter>

      <div className='brg-[#212529] max-md:px-6 font-poppins'>
        <Navbar />
        <AnimatedRoutes />

        <Footer />
      </div>

    </BrowserRouter>

  );
};

export default App;


