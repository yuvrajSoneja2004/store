import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import LoadingBar from 'react-top-loading-bar'
import { useGlobalContext } from './contexts/globalContext';
import NavigationBar from './components/NavigationBar/NavigationBar';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';
import MyScrollToTop from './utils/ScrollToTop';
import 'react-toastify/dist/ReactToastify.css';
import { isAuthenticated } from './utils/checkAuth';
import axios from 'axios';
import io from 'socket.io-client';
  

function App() {
  


  const [dashDetails , setDashDetails] = useState({});
  // const [socketInstance , setSocketInstance]

  let { loadingProgress, setLoadingProgress, themeState, } = useGlobalContext();

  const getData = async () => {
    try {
      const {data} = await axios.post("http://localhost:3001/addOnlineUser");
      await axios.post("http://localhost:3001/addVisitor");
      // console.log(dashDetails?.data , 'this is the dashboard data');
      setDashDetails(data);
      console.log(data , 'jo bhi main keha akdfowrean')
    } catch (error) {
      
    }
  }

  const decValue = async () => {
    try {
     const { data } = await axios.post("http://localhost:3001/removeOnlineUser");
     console.log(data , 'man this sucs 👍🏿👍🏿')
    } catch (error) {
      console.log(error , 'dec val')
    }
  }

  useEffect(() => {
    // getData();

    // Add event listeners for both "unload" and "beforeunload" events
    window.addEventListener("beforeunload", decValue);
    window.addEventListener("load" , getData)
    // window.addEventListener("beforeunload", decValue);

    // Return a cleanup function to remove the event listeners when the component unmounts
    return () => {
      window.removeEventListener("beforeunload", decValue);
      // window.removeEventListener("beforeunload", decValue);
    };
  }, []);


  useEffect(() => {
    const socket = io.connect("http://localhost:3001/", {transports: ['websocket', 'polling', 'flashsocket']});
  }, [])
  return (

    

   
  <>
      <NavigationBar />
      <LoadingBar
        color={themeState.color}
        progress={loadingProgress}
        onLoaderFinished={() => setLoadingProgress(0)}
        transitionTime={300}
        loaderSpeed={150}
      />
      <AnimatedRoutes />
     <Footer />
     <MyScrollToTop />
     </>
  )
}

export default App;