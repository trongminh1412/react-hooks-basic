import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './ColorBox.scss';

ColorBox.propTypes = {
    
};

function getRandomColor(){
    //random
    const COLOR_LIST = ['deeppink', 'green', 'red', 'yellow', 'black']
    const randomIndex = Math.trunc(Math.random() * 5);
    return COLOR_LIST[randomIndex];
}

function ColorBox() {
    //sử dụng arrowfunction unistale stale callback
    
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || 'deeppink';// init color chỉ dùng cho lần render đầu =, các lần sau k cần,
        console.log(initColor);
        return initColor;
    });

    //render voo nghia  initColor nhieu lan
    // const initColor = localStorage.getItem('box_color') || 'deeppink';
    // console.log(initColor);
    // const [color, setColor] = useState(initColor);

    function handleBoxClick() {
        const newColor = getRandomColor();
        setColor(newColor);
        localStorage.setItem('box_color', newColor);
    }

    return (
        <div
        className="color-box" 
        style={{ backgroundColor: color}}
        onClick={handleBoxClick}>
        </div>
    );
}

export default ColorBox;