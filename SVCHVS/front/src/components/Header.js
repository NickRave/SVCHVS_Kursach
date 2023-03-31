import React, { useState, useEffect } from "react";
import "./Header.css";
import { CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './Main';
import Singup from "./Singup";
import Singin from "./Singin";
import Application from "./Application";
import About from "./About";

export default function Header() {
    const [isNavVisible, setNavVisibility] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    };

    const toggleNav = () => {
        setNavVisibility(!isNavVisible);
    };

    return (
        <header className="Header">

            <img src={require("../assets/planeLogo.png")} className="Logo"  />
            <CSSTransition
                in={!isSmallScreen || isNavVisible}
                timeout={350} classNames="NavAnimation" unmountOnExit>

                    <nav className="Nav">
                        <button className="btn" onClick={(e) => {
                        e.preventDefault();
                        window.location.href = '/signin';
                    }}>Sign In</button>
                        <a href="/application">Applications</a>
                        <a href="/main">Home</a>
                        <a href="/about">About</a>
                        <button className="btn" onClick={(e) => {
                            e.preventDefault();
                            window.location.href = '/signup';
                        }}>Sign Up</button>
                    </nav>
            </CSSTransition>
            <button onClick={toggleNav} className="Penta">
                ⛧
            </button>

            <Router>
                <Routes >

                    <Route path='/signup' element={<Singup />} />
                    <Route path='/main' element={<Main />} />
                    <Route path='/signin' element={<Singin />} />
                    <Route path='/application' element={<Application />} />
                    <Route path='/about' element={<About />} />
                </Routes >
            </Router>
        </header>


    )
}