let reducer = (state, action) => {
    switch (action.type) {

        case "API_LOADING":
            return {
                ...state,
                isLoading: true
            }

        case "ALL_PRODUCTS":

            let trendingData = action.payload.filter((curProduct) => {
                return curProduct.isTrending === true;
            })
            let bestSellerData = action.payload.filter((curProduct) => {
                return curProduct.isBestSeller === true;
            })

            return {
                ...state,
                isLoading: false,
                products: action.payload,
                trendingProducts: trendingData,
                bestSellingProducts: bestSellerData

            }

        case "ASENDING_DATA":
            return {
                ...state,
                isLoading: false,
                products: action.payload
            }

        case "DESENDING_DATA":
            return {
                ...state,
                isLoading: false,
                products: action.payload
            }
        case "PRICE_LOW_TO_HIGH":
            return {
                ...state,
                isLoading: false,
                products: action.payload
            }
        case "PRICE_HIGH_TO_LOW":
            return {
                ...state,
                isLoading: false,
                products: action.payload
            }
        case "API_ERROR":
            return {
                ...state,
                isLoading: false
            }
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
                pageCount: Math.ceil(action.payload.length / state.perPage),
            };
        case 'SET_PAGE':
            return {
                ...state,
                currentPage: action.payload,
            };

        default:
            return state;
    }
}


let themeReducer = (state, action) => {
    switch (action.type) {
        case 'TURN_ON_NIGHT_MODE':
            return {
                isDarkMode: true,
                background: '#000',
                color: '#ffffff'
            }
        case 'TURN_OFF_NIGHT_MODE':
            return {
                isDarkMode: false,
                background: '#ffffff',
                color: '#000000'
            }


        default:
            return state;
    }
}


let cateogryReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                cateLoading: true
            }


        case "SET_SPECIFIC_CATEGORY":
            return {
                cateLoading: false,
                currentCategory: action.payload
            }



        default:
            return state;
    }
}

export { reducer, themeReducer, cateogryReducer };