import React from 'react';

const Content = (props) => {
    const [
        _,
        img1,
        img2,
        img3,
    ] = props.img;

    const menuStyles = {
        backgroundImage: `url(${img1})`,
    };
    const contentStyles = {
        backgroundImage: `url(${img2})`,
    };
    const addStyles = {
        backgroundImage: ` rl(${img3})`,
    };



    return (
        <main>
            <div className="menu" style={menuStyles}>
                THIS IS MENU
            </div>

            <div className="content" style={contentStyles}>
                <button style={{backgroundColor: props.btnColor}} onClick={() => {
                    props.changeColor()
                }}>CHANGE INDEXES</button>
            </div>

            <div className="add" style={addStyles}>
                THIS IS ADD
            </div>
        </main>
    )
};

export default Content;