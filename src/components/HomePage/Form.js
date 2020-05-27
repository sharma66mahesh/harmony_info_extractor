import React from 'react';
import PropTypes from 'prop-types';

const Form = ({head, display, submit, onChange}) => 
    <form onSubmit={submit}>
      <h3>{head}</h3>
      {Object.keys(display).map(key => {
        return(
          <div className='form-group' key={key}>
            <label htmlFor={key}>{key}: </label>
            <input required name={key} type={display[key]} onChange={onChange} />
          </div>
        );
      })}
      <div className='form-group'>
        <button className='btn btn-primary'>GO!</button>
      </div>
    </form>


Form.propTypes = {
  head: PropTypes.string,
  display: PropTypes.object,
  onChange: PropTypes.func,
  submit: PropTypes.func
};

export { Form };