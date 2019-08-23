import React, { Component } from 'react';
import '../components_css/header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="container-fluid">
                <div className="container">
                    <div className="row justify-content-between align-items-center p-3">
                        <div className="logo">
                            <Link to="/"><h3>Crypto</h3></Link>
                        </div>
    
                        <nav>
                            <Link to="/">Home</Link>
                            <Link to="/following">Following</Link>
                            <Link to="/about">About</Link>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;