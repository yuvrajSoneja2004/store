import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';


function Login() {

    const [userInfo , setUserInfo] = useState({
        useremail: "",
        userpass: ""
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
        exit={{opacity: 0 , x: -100}}
        >
            <h1>Login</h1>
            <div>
            <label htmlFor="emailInput">Email</label>
            <input type="text" placeholder='Enter Your Email' onChange={handleInput} value={userInfo.useremail} name='useremail' id='emailInput' required/>
            </div>
           <div>
           <label htmlFor="emailInput">Password</label>
            <input type="password" placeholder='Enter Your Password' onChange={handleInput} value={userInfo.userpass} name='userpass' required/>
           </div>
           <button type='submit'>Log in</button>
           <p>Don't Have an Account? <StyledLink onClick={() => {navigate("/register/signup")}}>Click Here.</StyledLink></p>
        </LoginElements>
  )
}




const Whole = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    gap: 170px;
`

const Blob = styled.div`

  width: 400px;
  height: 400px;
  background-size: cover;
  background-position: center center;
  background-repeat: repeat;
  background-image: url("data:image/svg+xml;utf8,%3Csvg viewBox=%220 0 1000 1000%22 xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cdefs%3E%3CclipPath id=%22a%22%3E%3Cpath fill=%22currentColor%22 d=%22M927 657.5q-52 157.5-204 200t-295.5 30q-143.5-12.5-255-120t-124-272Q36 331 163.5 235t275-158.5Q586 14 733.5 97T930 340q49 160-3 317.5Z%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3Cg clip-path=%22url(%23a)%22%3E%3Cpath fill=%22%23444cf7%22 d=%22M927 657.5q-52 157.5-204 200t-295.5 30q-143.5-12.5-255-120t-124-272Q36 331 163.5 235t275-158.5Q586 14 733.5 97T930 340q49 160-3 317.5Z%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E");
`

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

export default Login