import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavCard from './NavCard';
import '../styles/NavOptions.css';

const NavOptions = ({ miPhones, redmiPhones, tv, laptops, fitnessAndLifeStyle, home, audio, accessories }) => {
    const populateNavCards = (set) => {
        return set.map((item, index) => (<NavCard name={item.name} price={item.price} image={item.image} key={index} index={index} />));
    };
    return (
        <div className='navOptions'>
            <Routes>
                <Route exact path="/miphones" element={populateNavCards(miPhones)} />
                <Route exact path="/redmiphones" element={populateNavCards(redmiPhones)} />
                <Route exact path="/tv" element={populateNavCards(tv)} />
                <Route exact path="/laptops" element={populateNavCards(laptops)} />
                <Route exact path="/lifestyle" element={populateNavCards(fitnessAndLifeStyle)} />
                <Route exact path="/home" element={populateNavCards(home)} />
                <Route exact path="/audio" element={populateNavCards(audio)} />
                <Route exact path="/accessories" element={populateNavCards(accessories)} />
            </Routes>
        </div>
    )
}

export default NavOptions