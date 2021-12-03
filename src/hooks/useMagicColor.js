import { useEffect, useRef, useState } from 'react';

// function randomColor(){
//     const COLOR_LIST = ['deeppink', 'green', 'red', 'yellow', 'black']
//     const randomIndex = Math.trunc(Math.random() * 5);
//     console.log(COLOR_LIST[randomIndex]);
//     return COLOR_LIST[randomIndex];
// }

function randomColor(currentColor){
    const COLOR_LIST = ['deeppink', 'green', 'red', 'yellow', 'black']
    
    const currentIndex = COLOR_LIST.indexOf(currentColor);
    let newIndex = currentIndex;

    while(currentIndex === newIndex){
        newIndex = Math.trunc(Math.random() * 5);
    }
    console.log(COLOR_LIST[newIndex]);
    return COLOR_LIST[newIndex];
}

function useMagicColor(props) {
    const [color, setColor] = useState('transparent');

    //tránh bị lặp lại màu trước đó sau mỗi lần render sử dụng useRef
    const colorRef = useRef('transpanrent');

    //change color every 1 second
    useEffect(() => {
        const colorInterval = setInterval(() => {
            // console.log('changeColor: ',colorRef.current);
           const  newColor = randomColor(colorRef.current);
           setColor(newColor);

           colorRef.current = newColor;
        }, 1000);

        return () => {
            clearInterval(colorInterval);
        }
    },[]);
    return color;
}

export default useMagicColor;