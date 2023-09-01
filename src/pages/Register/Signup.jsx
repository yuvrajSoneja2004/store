import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

function Signup() {

    const [userInfo , setUserInfo] = useState({
        username: "",
        useremail: "",
        userpass: "",
        userconformpass: ""
    });

    const navigate = useNavigate();

    const handleInput = (e) => {
        const { value, name } = e.target;
        setUserInfo(prevInfo => ({
          ...prevInfo,
          [name]: value
        }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
      }



  return (
    <LoginElements onSubmit={handleSubmit} initial={{opacity: 0 , x: -100}} animate={{opacity: 1 , x: 0}}
    exit={{opacity: 0 , x: -100}}>
            <h1>Signup</h1>
            <div>
            <label htmlFor="usernameInput">Username</label>
            <input type="text" placeholder='Enter Username' onChange={handleInput} value={userInfo.username} name='username' id='usernameInput' required/>
            </div>
           <div>
           <label htmlFor="userEmailInput">Email</label>
            <input type="email" placeholder='Enter Your Email' onChange={handleInput} value={userInfo.useremail} name='useremail' required id='userEmailInput'/>
           </div>
           <div>
           <label htmlFor="userPassInput">Password</label>
            <input type="password" placeholder='Enter Your Password' onChange={handleInput} value={userInfo.userpass} name='userpass' required id='userPassInput'/>
           </div>
           <div>
           <label htmlFor="emailInput">Conform Password</label>
            <input type="password" placeholder='Conform Password' onChange={handleInput} value={userInfo.userconformpass} name='userconformpass' required/>
           </div>
           <button type='submit'>Sign up</button>
           <p>Already Have an Account? <StyledLink onClick={() => {navigate("/register/login")}}>Click Here.</StyledLink></p>
        </LoginElements>
  )
}

const LoginElements = styled(motion.form)`

    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 30%;
    /* border: 2px solid red; */


    h1 {
        font-weight: bolder;
        font-size: 50px;
    }

    label {
        font-weight: bolder;
        font-size: 16px;
        display: block;
    }

    input {
        border: none;
        outline: none;
        font-size: 14px;
        width: 100%;
        margin-top: 8px;
        border-bottom: 1px solid grey;
    }

    button {
        font-size: 15px;
        font-weight: bold;
        letter-spacing: 1px;
        border: none;
        outline: none;
        padding: 13px 0;

    }
`

const StyledLink = styled.label`
    text-decoration: none;
    font-style: italic;
    font-weight: bold;
    display: inline;
`

export default Signup