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

        default:
            return state;
    }
}

export default reducer;