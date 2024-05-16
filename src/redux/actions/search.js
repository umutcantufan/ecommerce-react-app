export const searchAction = (keyword) => async (dispatch) => {
    keyword=keyword.toLowerCase()
    const data = await fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            dispatch({type: 'SEARCH', payload: data.filter(dt => dt.title.toLowerCase().includes(keyword) || dt.description.includes(keyword) || dt.category.includes(keyword))})
}