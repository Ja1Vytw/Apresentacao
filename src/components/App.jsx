import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Sobre from './Sobre';
import Desenvolvimento from './Desenvolvimento';
import ContactForm from './ContactForm';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <>
                        <Header />
                        <Sobre />
                        <Desenvolvimento />
                        <ContactForm />
                    </>
                } />
            </Routes>
        </Router>
    );
};

export default App;