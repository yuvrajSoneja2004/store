import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import LoadingBar from 'react-top-loading-bar'
import { useGlobalContext } from './contexts/globalContext';
import NavigationBar from './components/NavigationBar/NavigationBar';
import AnimatedRoutes from './components/AnimatedRoutes/AnimatedRoutes';
import MyScrollToTop from './utils/ScrollToTop';
import 'react-toastify/dist/ReactToastify.css';
import { isAuthenticated } from './utils/checkAuth';
  

function App() {

  let { loadingProgress, setLoadingProgress, themeState, } = useGlobalContext();
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