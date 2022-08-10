const SET_PRODUCTS = "SET_PRODUCTS"
const SELECTED_PRODUCT = "SELECTED_PRODUCT"

const initialState = {
  products: [],
  product: {},
} 

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {...state, products: action.products}  
    case SELECTED_PRODUCT:
      return {...state, product: action.product}
    default: return state
  }
}

// ACTION CREATORS
export const setProducts = (products) => ({type: SET_PRODUCTS, products})

export const selectedProduct = (product) => ({type: SELECTED_PRODUCT, product})