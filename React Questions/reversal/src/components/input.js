import React from 'react';

const Form = (props) => {
    return (
        <div>
            <form>
                <label htmlFor="str">Enter String:</label>
                <input name="str" type="text" onChange={props.onChange} />
            </form>
        </div>
    );
};

export default Form;