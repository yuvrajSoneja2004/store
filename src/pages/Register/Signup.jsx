import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { ProgressBar } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { styled } from 'styled-components';


function Signup() {

    const [userInfo , setUserInfo] = useState({
        username: "",
        useremail: "",
        userpass: "",
        userconformpass: ""
    });

    const [isLoading , setIsLoading] = useState(false)

    const navigate = useNavigate();

    const handleInput = (e) => {
        const { value, name } = e.target;
        setUserInfo(prevInfo => ({
          ...prevInfo,
          [name]: value
        }));
      };

      const handleSubmit = async(e) => {
        setIsLoading(true)
        e.preventDefault();
        try {
            if(userInfo.userpass != userInfo.userconformpass){
                toast.error('Password and conform password field does not match', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            } else if (userInfo.userpass.length < 6){
                toast.error('Password must be of atleast 6 characters', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            } else {
           const { data } =  await axios.post(`https://purple-anemone-veil.cyclic.app/register`, {
            userName: userInfo.username,
            userEmail: userInfo.useremail,
            userPass: userInfo.userpass
           });
           if(data?.res === "ok"){
          
                navigate(`/register/setAvatar/${data?.msg}`);
           }
           console.log(data , "res form clident");
        }
        } catch (error) {
            console.log(error.response.status)
            if(error.response.status === 422)
            toast.error('User with this email already exists', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        } finally {
            setIsLoading(false)
        }

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
           <motion.button type='submit' whileHover={{scale: 1.04}} whileTap={{scale: 0.98}} transition={{ type: "spring", stiffness: 400, damping: 17 }}>{!isLoading ? <label>Sign up</label> : <motion.div initial={{scale: 0}} animate={{scale: 1}} exit={{scale:0}}>
           <ProgressBar
            height="30"
            width="30"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass="progress-bar-wrapper"
            borderColor = '#F4442E'
            barColor = '#51E5FF'
/>
           </motion.div> }</motion.button>
           <p>Already Have an Account? <StyledLink onClick={() => {navigate("/register/login")}}>Click Here.</StyledLink></p>
           <ToastContainer />
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