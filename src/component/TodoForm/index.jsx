import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react/cjs/react.development';

TodoForm.propTypes = {
    onsubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onsubmit: null,
}
function TodoForm(props) {
    const { onSubmit } = props;
    const [value, setValue] = useState('');

    function handleValueChange(e){
        console.log(e.target.value); 
        setValue(e.target.value);
    }

    function handleSubmit(e){
        //prevent reloader brower
        e.preventDefault();
        if(!onSubmit)return;

        //sent value to parent( app.js)
        const formValue = {
            title: value,
        }
        onSubmit(formValue);

        //reset form
        setValue('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleValueChange}/>
            <button type="submit" onSubmit={handleSubmit}>submit</button>
        </form>
    );
}

export default TodoForm;