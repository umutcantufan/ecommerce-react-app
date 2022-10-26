export const productsAction = (sort) => async (dispatch) => {
    const data = await fetch(`https://fakestoreapi.com/products?sort=${sort}`)
            .then(res=>res.json())
            dispatch({type: 'GET_PRODUCTS', payload: data})
}

export const productsActionDetail = (id) => async (dispatch) => {
    const data = await fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            dispatch({type: 'GET_DETAILS', payload: data})
}


export const categoryFilter = (category) => async (dispatch) => {
    const data = await fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res=>res.json())
            dispatch({type: 'GETALL_CATEGORY', payload: data})
}