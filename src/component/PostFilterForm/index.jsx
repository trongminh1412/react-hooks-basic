import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react/cjs/react.development';

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func, 
};

PostFilterForm.defaultProps = {
    onSubmit: null,
}

function PostFilterForm(props) {
    const { onSubmit } = props;
    const [ searchTerm, setSearchTerm ] = useState('');
    //ref giúp giữ value sau mỗi lần render
    const typingTimeoutRef = useRef(null);//debounce

    function handleSearchChange(e) {
        setSearchTerm(e.target.value);//render lại value

        if(!onSubmit) return;

        //Set time out sau <300 clear time out, nếu >300 k có sự kiện mới
        // thì mới submit
        if(typingTimeoutRef.current){
            clearTimeout(typingTimeoutRef.current);
        };
        
        //su dung ki thuan debounce để tránh call api nhiều lần
        typingTimeoutRef.current = setTimeout(() => {
            const formValue = {
                searchTerm: e.target.value,
            };
            onSubmit(formValue);
        },1000);        
    }

    return (
        <form>
            <input 
            type="text" 
            value={searchTerm}
            onChange={handleSearchChange} />
        </form>
    );
};

export default PostFilterForm;