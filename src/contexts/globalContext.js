import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import reducer from '../reducers/globalReducer';

// global context
const GlobalContext = React.createContext();




// global provider
export const GlobalProvider = ({ children }) => {



    // Defining global state
    let initialState = {
        isLoading: false,
        products: [],
        trendingProducts: [],
        bestSellingProducts: []
    }


    // Requiring GLOBAL state
    const [state, dispatch] = useReducer(reducer, initialState);

    // global theme
    const [bgTheme, setBgTheme] = useState({
        backgroundColor: '#ffffff',

    });
    const [fontTheme, setFontTheme] = useState({
        color: '#222222',

    });

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


    useEffect(() => {
        getData();
    }, [])


    return <GlobalContext.Provider value={{ bgTheme, fontTheme, ...state, getAsendingData, getDesendingData, getHighToLow, getLowToHigh, dispatch }}

    >{children}</GlobalContext.Provider>
};


// custom hook to provide data among the whole app
export const useGlobalContext = () => {
    return React.useContext(GlobalContext);
}
