import React from 'react'
import './login_style.css'
// import { passwordError, emailError, userLoginFailed, userLogin} from '../../store/User/userActions';
// import { userValidationErrorSelector,userSelector,userLoginErrorSelector } from '../../store/User/userSelectors';
import { userLoginAsync } from '../../store/user/userActions';
import { userLoggedInSelector } from '../../store/user/userSelector';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { loginErrorSelector } from '../../store/user/userSelector';
import { useNavigate, Link} from 'react-router-dom';

//Formic imports
import {Formik, Form, replace} from 'formik'
import TextField from '../TextField'
import * as Yup from 'yup'


export const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(userLoggedInSelector)
    const loginError = useSelector(loginErrorSelector)
//     const loginError = useSelector(userLoginErrorSelector)
//     const user = useSelector(userSelector)
//     const formErrors = useSelector(userValidationErrorSelector)
    const Initial_formValues = {
        email: '',
        password:'',
    }
    const [formValues, setFormValues] = useState(Initial_formValues);
    const changeHandler = (e)=>{
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value})
}

const submitHandler = (e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', formValues.email)
    formData.append('password', formValues.password)
    dispatch(userLoginAsync(formData))
    

} 

const validate = Yup.object({
    email: Yup.string()
      .email('Email is Invalid')
      .required('Required'),
    password: Yup.string()
      .required('Password is required'),
  })




  return (
    <div className='loginForm'>
     {/* <form onSubmit={submitHandler} className='form login-form'> */}
                    {/* <label htmlFor="email" className='txt-left'>Email</label> */}
                    {/* <input type="text" name='email' className='form-fields login-input' placeholder='Email' onChange={changeHandler} value={formValues.email}/> */}

                    {/* <label htmlFor="password" className='txt-left'>Password</label> */}

                    {/* <input type="password" name='password' id='password' placeholder='Password' className='form-fields login-input' onChange={changeHandler} value={formValues.password}/> */}

                    {/* <button className='form-btn auth-btn'>Sign in</button> */}
                    {/* <Link to='/signup' className='btnSign'>Register</Link> */}

         {/* </form> */}
         {/* <div className="error">
          <p style={{color:'red'}}>
              {loginError?.response?.data?.message}
          </p>
         </div> */}

 <Formik
    initialValues={{
      email: '',
      password: '',
      }}
      validationSchema={validate}
      onSubmit={values => {
        dispatch(userLoginAsync(values))
        // setFormValues(Initial_Values)
        // setImage(null)
        // navigate('/login')
      }}
      >
      
        <>
        <div className='form'>
          <h1 className="my-4 font-weight-bold .display-4">Sign in</h1>
          <Form>
            <TextField type="email" name='email' id='email' placeholder='Email' className='form-fields login-input'/>
            <TextField name="password" type="password" id='password' placeholder='Password' className='form-fields login-input'/>
          <p style={{color:'red'}}>
              {loginError?.response?.data?.message}
          </p>
            <button className="btn btn-dark mt-3" type="submit">Sign in</button>
          </Form>
          <div className="error">
          </div>
        </div>
    
      </>
    </Formik>
    </div>
  )
}
