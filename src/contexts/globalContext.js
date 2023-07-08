import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { reducer, themeReducer, cateogryReducer } from '../reducers/globalReducer';
import LoadingBar from 'react-top-loading-bar';

// global context
const GlobalContext = React.createContext();




// global provider
export const GlobalProvider = ({ children }) => {



    // Defining global state
    let initialState = {
        isLoading: false,
        products: [],
        trendingProducts: [],
        bestSellingProducts: [],
        singleProduct: [],
        alsoBuy: [],
        cart: [],
        searchRes: [],
        bgMusicIndex: 0
    }

    // Declaring theme state

    let initialThemeState = {
        background: '#ffffff !important',
        color: '#000000 !important',
        isDarkMode: false,

    }

    //Search data and code
    const [inputData, setInputData] = useState("");


    const getSearchData = async (ENDPOINT) => {
        dispatch({ type: 'SET_LOADING' });
        try {
            let fetch = await axios.get(ENDPOINT);
            let res = await fetch.data;
            dispatch({ type: "SEND_SEARCH_DATA", payload: res })
        } catch (error) {
            console.log(error)
            dispatch({ type: "API_ERROR" })
        }
    }

    // Change title

    const changeTitle = (TITLE) => {
        return document.title = TITLE
    }

    const onSearch = () => {
        getSearchData(`https://purple-anemone-veil.cyclic.app/?name=${inputData}`);
    }






    const handlePageClick = (data) => {
        dispatch({ type: 'SET_PAGE', payload: data.selected });
    };


    // Requiring GLOBAL state
    const [state, dispatch] = useReducer(reducer, initialState);



    // setInterval(() => {
    //     console.log(state.singleProduct)
    // }, 1000);

    // global theme
    // const [bgTheme, setBgTheme] = useState({
    //     backgroundColor: '#ffffff',

    // });
    // const [fontTheme, setFontTheme] = useState({
    //     color: '#222222',

    // });


    // Product Page State
    const [cateState, categoryDispatch] = useReducer(cateogryReducer, {
        cateLoading: false,
        currentCategory: [],
        isErrorOcurred: false
    });
    // Global Theme

    const [themeState, dispatchTheme] = useReducer(themeReducer, initialThemeState);

    const themeHandler = () => {
        if (!themeState.isDarkMode) {
            dispatchTheme({ type: "TURN_ON_NIGHT_MODE" });
        }
        else {
            dispatchTheme({ type: "TURN_OFF_NIGHT_MODE" });
        }
    }

    // Top Loading Data Code

    const [loadingProgress, setLoadingProgress] = useState(0);
    const loadingSpeedController = () => {

        setTimeout(() => {
            setLoadingProgress(30);
        }, 200);

        setTimeout(() => {
            setLoadingProgress(100);
        }, 1000);

        setTimeout(() => {
            LoadingBar.finish();
        }, 1700);

    }

    // Dynamic images URLs for shop page


    const bgLinks = {
        women: 'https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',

        men: "https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        perfumes: "https://images.pexels.com/photos/3910071/pexels-photo-3910071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        footwear: "https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        tech: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        sale: "https://images.pexels.com/photos/5662862/pexels-photo-5662862.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"



    };


    // API URL
    let API_URL = "https://purple-anemone-veil.cyclic.app/";

    // Fetching data from API


    const getData = async () => {
        dispatch({ type: 'API_LOADING' });
        try {
            let fetch = await axios.get(API_URL);
            let res = await fetch.data;
            // console.log(res);
            dispatch({ type: "ALL_PRODUCTS", payload: res });

        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    }
    const getAsendingData = async () => {
        dispatch({ type: 'API_LOADING' });
        try {
            let fetch = await axios.get('https://purple-anemone-veil.cyclic.app/asending');
            let asendingRes = await fetch.data;
            // console.log(res);
            dispatch({ type: "ASENDING_DATA", payload: asendingRes });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    }
    const getDesendingData = async () => {
        dispatch({ type: 'API_LOADING' });
        try {
            let fetch = await axios.get('https://purple-anemone-veil.cyclic.app/desending');
            let desendingRes = await fetch.data;
            // console.log(res);
            dispatch({ type: "DESENDING_DATA", payload: desendingRes });
        }
        catch (error) {
            dispatch({ type: "API_ERROR" });

        }

    }
    const getLowToHigh = async () => {
        dispatch({ type: 'API_LOADING' });
        try {
            let fetch = await axios.get('https://purple-anemone-veil.cyclic.app/lowToHigh');
            let resDat = await fetch.data;
            // console.log(res);
            dispatch({ type: "PRICE_LOW_TO_HIGH", payload: resDat });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    }
    const getHighToLow = async () => {
        dispatch({ type: 'API_LOADING' });
        try {
            let fetch = await axios.get('https://purple-anemone-veil.cyclic.app/highToLow');
            let resDat = await fetch.data;
            // console.log(res);
            dispatch({ type: "PRICE_HIGH_TO_LOW", payload: resDat });
        } catch (error) {
            dispatch({ type: "API_ERROR" });
        }
    }

    const getSpecificCategoryProduct = async (ENDPOINT) => {
        categoryDispatch({ type: "SET_LOADING" })
        setLoadingProgress(30);
        try {
            let fetch = await axios.get(ENDPOINT);
            setLoadingProgress(50);
            let res = await fetch.data;
            console.log(res);
            setLoadingProgress(100);

            categoryDispatch({ type: "SET_SPECIFIC_CATEGORY", payload: res })
        } catch (error) {
            console.log(`Error occured inside getSpecificCategoryProduct function which is defined on line no.190. Still the reason : ${error}`);
            categoryDispatch({ type: "CATEGORY_NETWERK_ERROR" })
            setLoadingProgress(100);
        }
    }

    const getSingleProduct = async (ENDPOINT) => {
        dispatch({ type: "API_LOADING" });
        setLoadingProgress(30);
        try {
            let fetch = await axios.get(ENDPOINT);
            setLoadingProgress(50);
            let res = await fetch.data;
            setLoadingProgress(100);
            dispatch({ type: "SINGLE_PRODUCT_DATA", payload: res });
            dispatch({ type: "ALSO_BUY_DATA", payload: res });

        } catch (error) {
            console.log(`Error occured inside getSpecificCategoryProduct function which is defined on line no.190. Still the reason : ${error}`);
            setLoadingProgress(100);
        }
    }
    const getAlsoBuy = async (ENDPOINT) => {
        dispatch({ type: "API_LOADING" });
        try {
            let fetch = await axios.get(ENDPOINT);
            let res = await fetch.data;
            console.log(res , "Also buy")
            dispatch({ type: "ALSO_BUY_DATA", payload: res });

        } catch (error) {
            console.log(`helelelelele : ${error}`);
        }
    }



    useEffect(() => {
        getData();
        getSingleProduct("https://purple-anemone-veil.cyclic.app/singleProduct/63e0f6162f4be155c286ae42");
        let topics = ["watch", "men", "sam"];
        var topic = topics[Math.floor(Math.random() * topics.length)];
        setInputData(topic)
        onSearch();


    }, [])


    return <GlobalContext.Provider value={{
        ...state, getAsendingData, getDesendingData, getHighToLow, getLowToHigh, dispatch, handlePageClick,
        themeState, themeHandler, loadingProgress, setLoadingProgress, loadingSpeedController,
        bgLinks, getSpecificCategoryProduct, ...cateState, getSingleProduct,
        getAlsoBuy, inputData, setInputData, onSearch , changeTitle
    }}

    >{children}</GlobalContext.Provider>
};


// custom hook to provide data among the whole app
export const useGlobalContext = () => {
    return React.useContext(GlobalContext);
}




