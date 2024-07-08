// Example: src/index.js or src/App.js
import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import "./Header.css"

function Header() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

    const openLoginModal = () => setIsLoginModalOpen(true);
    const closeLoginModal = () => setIsLoginModalOpen(false);
    const openSignUpModal = () => setIsSignUpModalOpen(true);
    const closeSignUpModal = () => setIsSignUpModalOpen(false);
    return (
        <nav className="navbar navbar-expand-lg navbar navbar-light bg-light">
            <a className="navbar-brand" href="#"> Formatter </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">JSON Format</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Remove Space</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Convert Case</a>
                    </li>
                </ul>
                <div className="button-container">
                    <button className="button" onClick={openLoginModal}>LogIn</button>
                    <button className="button" onClick={openSignUpModal}>SignUp</button>
                </div>
            </div>
            {isLoginModalOpen && (
                <div className="modal" onClick={closeLoginModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Login</h2>
                        <form>
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" name="username" /><br /><br />
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" name="password" /><br /><br />
                            <button type="submit">Submit</button>
                        </form>
                        <span className="close" onClick={closeLoginModal}>&times;</span>
                    </div>
                </div>
            )}

            {isSignUpModalOpen && (
                <div className="modal" onClick={closeSignUpModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Sign Up</h2>
                        <form>
                            <label htmlFor="newUsername">Username:</label>
                            <input type="text" id="newUsername" name="newUsername" /><br /><br />
                            <label htmlFor="newPassword">Password:</label>
                            <input type="password" id="newPassword" name="newPassword" /><br /><br />
                            <button type="submit">Submit</button>
                        </form>
                        <span className="close" onClick={closeSignUpModal}>&times;</span>
                    </div>
                </div>
            )}
        </nav>
    );
}
export default Header;