let reducer = (state, action) => {
    switch (action.type) {

        case "API_LOADING":
            return {
                ...state,
                isLoading: true
            }

        case "ALL_PRODUCTS":
            return {
                ...state,
                isLoading: false,
                products: action.payload
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

        default:
            return state;
    }
}

export default reducer;