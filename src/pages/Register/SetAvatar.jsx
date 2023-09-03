import { motion } from 'framer-motion'
import React from 'react'
import { styled } from 'styled-components'
import DefaultUserIcon from '../../assets/default_user.png';
import { useState } from 'react';
import { BiUpload } from 'react-icons/bi'
import { useRef } from 'react';
import imageCompression from 'browser-image-compression'
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function SetAvatar() {

    let { userID } = useParams();
    const navigate = useNavigate()

    const [userProfilePic , setUserProfilePic] = useState("");
    const [compressedImage , setCompressedImage] = useState(null);
    const [address , setAddress] = useState("");
    const profilePicRef = useRef(null);
    const [pincode, setPincode] = useState('');
    const [isValid, setIsValid] = useState(false);
    const handleFileClick = () => {
        profilePicRef.current.click();
    }
    const handleImageUpload = async (e) => {
        const selectedImage = e.target.files[0];
    
        // Check if a file was selected
        if (!selectedImage) return;
    
        // Configure compression options
        const options = {
          maxSizeMB: 1, // Maximum size in megabytes
          maxWidthOrHeight: 1920, // Maximum width or height
          useWebWorker: true,
        };
    
        try {
          const compressedFile = await imageCompression(selectedImage, options);
    
          // Convert the compressed image to Base64
          const reader = new FileReader();
          reader.readAsDataURL(compressedFile);
          reader.onloadend = () => {
            const base64Data = reader.result;
            setUserProfilePic(URL.createObjectURL(selectedImage));
            setCompressedImage(base64Data);
          };
        } catch (error) {
          console.error('Error compressing image:', error);
        }
      };

     const handlePincodeChange = (event) => {
    const newPincode = event.target.value;
    setPincode(newPincode);

    // Validate the pincode using the regex pattern
    const regex = /^\d{5}$/; // Change this regex pattern as needed
    setIsValid(regex.test(newPincode));

    }

    const handleFinish = async () => {
        try {
            if(address.length === 0) {
                toast.info('Please enter your address', {
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
               let { data } =  await axios.put(`https://purple-anemone-veil.cyclic.app/setUserAvatar/${userID}`, {
                userProfilePic:compressedImage,
                userCurrentAddress: address
               });
               console.log(data , 'updating data man')
               if(data?.res){
                localStorage.setItem("user_id" , data?.msg);
               navigate("/");
               }
            }
            
        } catch (error) {
            
        }
    }

  return (
    <Whole>
    <Head1>Almost there!</Head1>
    <Head2>Choose Profile Picture & Fill Address Field</Head2>
    <div>
        <div className='profileDiv'><img src={userProfilePic.length === 0 ? DefaultUserIcon : compressedImage} alt="userProfile" /></div>
        <input type="file" ref={profilePicRef} style={{display: 'none'}} accept='.jpg, .jpeg, .png' onChange={handleImageUpload}/>
       <button onClick={handleFileClick}><BiUpload /> Choose Image</button>
       <div className='addressDiv'>
        <label htmlFor="address-field">Enter Address</label>
        <input type="text" id='address-field' value={address} onChange={(e) => {setAddress(e.target.value)}} placeholder='Enter Your Address Here'/>
        <label htmlFor="pincode" style={{marginTop: '30px'}}>Enter PIN code:</label>
      <input
        type="text"
        id="pincode"
        value={pincode}
        onChange={handlePincodeChange}
      />
      {isValid ? <p>Valid PIN code</p> : <p>Invalid PIN code</p>}
       </div>
    </div>
    <button className='finishBtn' onClick={handleFinish}>Finish Setup 😃</button>
    <ToastContainer />
    </Whole>
  )
}


const Whole = styled(motion.div)`

    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 30%;
    outline: 2px solid red;
    justify-content: center;
    align-items: center;

    div {
        text-align: center;

        button {
            padding: 10px 20px;
        }

        button {
            margin-top: 20px ;
        }
    }

    .finishBtn {
        padding: 10px 20px;
    }


    /* border: 2px solid red; */
    .profileDiv {
        width: 200px;
        height: 200px;
        border-radius: 50%;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
        }
    }


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

    .addressDiv {
        margin-top: 40px;

        input {
            text-align: center;
        }
    }
`

const Head1 = styled(motion.h1)``
const Head2 = styled(motion.h2)``
export default SetAvatar;