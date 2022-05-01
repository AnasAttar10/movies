import Joi from 'joi';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {
 
  let [user , setUser] = useState({
    FirstName : '' , 
    LastName : '' , 
    Age : '' , 
    Email : '' , 
    Password : ''
  });
  let [errorList , SetErrorList] = useState([]) ; 
  const nnn = useNavigate() ; 
  function goToPage(path){
    nnn('/'+path) ; 
  }
  function submitForm(e){
    e.preventDefault();
    let ValidationResult = ValidationForm() ;
    if(ValidationResult.error) {
      ValidationResult = ValidationResult.error.details
    SetErrorList( ValidationResult);
    }
    else{
      goToPage('Login');
    }
    // else{                     هذا عندما يكون الشغل ==api===وهو اصعب شي 
    //    let {data}  =  axios.post('' , user);
    //    if(data.message === 'sucess'){
    //      //// go to another page (login)
    //    }
    //    else{
    //      setmessage(data.error)
    //    }
      
    // }
  }
  function handelInputs(e){
    let OldUser = {...user} ; 
    OldUser[e.target.id] = e.target.value ; 
    setUser(OldUser);
  }
  function ValidationForm (){
    const schema = Joi.object(
      {
        FirstName :Joi.string().required().min(3).max(20).alphanum(),
        LastName :Joi.string().required().min(3).max(20).alphanum(), 
        Age :Joi.number().required().min(3).max(60),
        Email:Joi.string().required().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        Password:Joi.string().required().pattern(new RegExp('^[a-zA-z0-9]{8,}$')) 
      }
    )
    return schema.validate(user ,{abortEarly:false}) ;
  }
  return (
    <div className='my-5'>
      <div className='pb-4'>

        {errorList.map((error) =>
        <div className='bg-danger text-white p-1' key={Math.random()}>{error.message}</div>
        )}

      </div>

        <form onSubmit={submitForm}>
            <div className="mb-3">
              <label htmlFor="FirstName" className="form-label">First Name</label>
              <input onChange={handelInputs} type="text" className="form-control" id="FirstName" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="LastName" className="form-label">Last Name</label>
              <input onChange={handelInputs} type="text" className="form-control" id="LastName" />
            </div>
            <div className="mb-3">
              <label htmlFor="Age" className="form-label">Age</label>
              <input onChange={handelInputs} type="number" className="form-control" id="Age" />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">Email</label>
              <input onChange={handelInputs} type="email" className="form-control" id="Email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input onChange={handelInputs} type="password" className="form-control" id="Password" />
            </div>
            <button type="submit" className="btn btn-primary d-block mx-auto">Register</button>
        </form>

    </div>
  )
}
