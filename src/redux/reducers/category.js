export const categoryReducer = (state={category : []}, action) => {

    switch (action.type) {
        case "GETALL_CATEGORY":
            return{
                category: action.payload
            }
    
        default:
            return state
    }
}

