import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <a class="navbar-brand" href=""><img src="https://secure.skypeassets.com/content/dam/scom/images/logos/re1mu3b.png" alt="coco-cola" className="coco mr-3" /></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="navbar-brand ml-3" href=""><b>Skype</b></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Download</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Skype to Phone</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Skype Number</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Products
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Meet Now</a>
                                <a class="dropdown-item" href="#">Skype Manager</a>
                                <a class="dropdown-item" href="#">Skype with Alexa</a>
                                <a class="dropdown-item" href="#">Skype for content Creator</a>
                                <a class="dropdown-item" href="#">Skype For Business</a>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Get Help
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">Skype Support</a>
                                <a class="dropdown-item" href="#">Blog</a>
                                <a class="dropdown-item" href="#">Community</a>
                                <a class="dropdown-item" href="#">About Skype</a>

                            </div>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item ">
                            <a class="nav-link" href="#">Hosting a meeting</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sign in</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
