import React from 'react';

const Header = (props) => {
    const styles = {
        backgroundImage: `url(${props.img})`,
    };

    return (
        <header className="header" style={styles}>
            <nav>
                This is Navbar
            </nav>
        </header>
    )
};

export default Header;