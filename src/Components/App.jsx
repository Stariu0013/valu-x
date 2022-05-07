import React, {useEffect, useState} from "react";
import Header from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";

import img1 from '../assets/images/1.jpg';
import img2 from '../assets/images/2.jpg';
import img3 from '../assets/images/3.jpg';
import img4 from '../assets/images/4.jpg';
import img5 from '../assets/images/5.jpg';
import {changeBGColor} from "../helpers/ChangeBGColor";

const App = () => {
    const [imgsArr, setImgsArr] = useState([img1, img2, img3, img4, img5]);
    const [btnColor, setBtnColor] = useState('');

    const changeColor = () => {
        setBtnColor(prevState => changeBGColor());
    }


    const changeImgIndex = () => {
         setImgsArr(prevState => {
             return prevState.map((_, index, arr) => {
                 index = Math.floor(Math.random() * 5);

                 return arr;
             });
         });
    };

    return (
        <div className="container">
            <Header img={imgsArr[0]}/>
            <Content btnColor={btnColor} changeColor={changeColor} changeImgIndex={changeImgIndex} img={imgsArr}/>
            <Footer img={imgsArr[4]}/>
        </div>
    )

}

export default App;