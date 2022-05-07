import React from 'react';

const Footer = (props) => {
    const styles = {
        backgroundImage: `url(${props.img})`,
    };

    return (
        <footer className="footer" style={styles}>
            This is Footer
        </footer>
    )
};

export default Footer;