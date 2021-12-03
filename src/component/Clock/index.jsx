import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react/cjs/react.development';

Clock.propTypes = {
    
};

Clock.defaultProps = {
    
};

function formatDate(date){
    if(!date) return '';

    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);

    return `${hours}:${minutes}:${seconds}`
}
function Clock(props) {
    const [timeString, setTimeString] = useState('');

    useEffect(() => {
        const ClockInterval = setInterval(() => {
            const now = new Date();

            //h:m:s
            const newTimeString = formatDate(now);
            setTimeString(newTimeString);   
        }, 1000);

        return () =>{
            console.log('clearup');
            clearInterval(ClockInterval);
        }
    },[])
    return (
        <p>{timeString}</p>
    );
}

export default Clock;