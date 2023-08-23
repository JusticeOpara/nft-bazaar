import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Home';
import Stats from './Stats';
import Community from './Community';
import Collection from './Collection';
import Create from './Create';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes: React.FC = () => {

    const location = useLocation()
    console.log(location, "--location")

    return (

        <AnimatePresence>

            <Routes location={location} key={location.pathname}>

                <Route path="/" element={<Home />} />

                <Route path='/stats' element={<Stats />} />

                <Route path="/collection" element={<Collection />} />

                <Route path="/create" element={<Create />} />

                <Route path="/community" element={<Community />} />

            </Routes>

        </AnimatePresence>

    )
}
export default AnimatedRoutes
