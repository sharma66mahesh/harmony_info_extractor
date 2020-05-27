import React, { useState } from 'react';
import axios from 'axios';

import { Form } from './Form';
import { Response } from './Response';

const singleValidatorInfo = {
  "validator address": "text"
};

const HomePage = () => {

  const [validator, setValidator] = useState("");
  const [res, setRes] = useState("");

  const onChange = ((e) => {
    setValidator(e.target.value);
  });

  const submitValidatorAddr = ((e) => {
    e.preventDefault();
    console.log(validator);
    axios
      .post(
        process.env.REACT_APP_API_ENDPOINT,
        {
          "jsonrpc":"2.0",
          "method":"hmy_getValidatorInformation",
          "params":[
            validator
          ],
          "id":1
        }
      )
      .then((res) =>{
        setRes(res);
      })
  })

  return(
    <div className='row'>
      <div className='col-md-5'>
        <div className='card card-body m-1'>
          <Form 
            head="Get validator info"
            display={singleValidatorInfo}
            submit={submitValidatorAddr}
            onChange={onChange}
          />
        </div>
      </div>

      <div className='card col-md-6 m-1'>
        <div className='card-body'>
          <Response render={res} />
        </div>
      </div>
    </div>
  );
}

export { HomePage };