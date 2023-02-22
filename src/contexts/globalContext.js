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
        currentPage: 0,
        perPage: 10,
        pageCount: 0,
        singleProduct: []
    }

    // Declaring theme state

    let initialThemeState = {
        background: '#ffffff',
        color: '#000000',
        isDarkMode: false

    }




    const handlePageClick = (data) => {
        dispatch({ type: 'SET_PAGE', payload: data.selected });
    };


    // Requiring GLOBAL state
    const [state, dispatch] = useReducer(reducer, initialState);


    const { products, currentPage, perPage, pageCount } = state;
    const productsToDisplay = products.slice(
        currentPage * perPage,
        (currentPage + 1) * perPage
    );

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
    let API_URL = "http://localhost:5000";

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
            let fetch = await axios.get('http://localhost:5000/asending');
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
            let fetch = await axios.get('http://localhost:5000/desending');
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
            let fetch = await axios.get('http://localhost:5000/lowToHigh');
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
            let fetch = await axios.get('http://localhost:5000/highToLow');
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
            console.log(res);
            setLoadingProgress(100);
            dispatch({ type: "SINGLE_PRODUCT_DATA", payload: res });
        } catch (error) {
            console.log(`Error occured inside getSpecificCategoryProduct function which is defined on line no.190. Still the reason : ${error}`);
            setLoadingProgress(100);
        }
    }



    useEffect(() => {
        getData();
        getSingleProduct("http://localhost:5000/singleProduct/63e0f6162f4be155c286ae42");
    }, [])


    return <GlobalContext.Provider value={{
        ...state, getAsendingData, getDesendingData, getHighToLow, getLowToHigh, dispatch, productsToDisplay, handlePageClick,
        themeState, themeHandler, loadingProgress, setLoadingProgress, loadingSpeedController,
        bgLinks, getSpecificCategoryProduct, ...cateState, getSingleProduct
    }}

    >{children}</GlobalContext.Provider>
};


// custom hook to provide data among the whole app
export const useGlobalContext = () => {
    return React.useContext(GlobalContext);
}




