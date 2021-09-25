import React from 'react';

const Header = () => {
    return (
        <div>
            <nav>
                <div className="row">
                    <div className="container">
                        <div className="logo">
                            <img src="images/logo.png" alt=""/>
                        </div>
                        <div className="responsive"><i data-icon="m" className="icon"></i></div>
                        <ul className="nav-menu">
                            <li><a href="#home" className="smoothScroll"> خانه</a></li>
                            <li><a href="#about" className="smoothScroll"> درباره ما</a></li>
                            <li><a href="#portfolio" className="smoothScroll"> نمونه کارها</a></li>
                            <li><a href="#blog" className="smoothScroll"> وبلاگ</a></li>
                            <li><a href="#contact" className="smoothScroll"> ارتباط با ما</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;