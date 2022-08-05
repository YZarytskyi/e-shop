const SET_PRODUCTS = "SET_PRODUCTS"
const SELECTED_PRODUCT = "SELECTED_PRODUCT"
const REMOVE_SELECTED_PRODUCT = "REMOVE_SELECTED_PRODUCT"


const initialState = {
  products: [],
} 

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {...state, products: action.products}  
    case SELECTED_PRODUCT:

    case REMOVE_SELECTED_PRODUCT:

    default: return state
  }
}


// ACTION CREATORS
export const setProducts = (products) => ({type: SET_PRODUCTS, products})

const selectedProduct = (product) => ({type: SELECTED_PRODUCT, product})

const removeSelectedProduct = (product) => ({type: REMOVE_SELECTED_PRODUCT, product})