const ADD_CARD = "ADD_CARD";
const REMOVE_CARD = "REMOVE_CARD";
const REMOVE_CARD_QTY = 'REMOVE_CARD_QTY'
const CLEAR_CARD = 'CLEAR_CARD'

const initialState = {
  cart: [],
};

export const cartReducer = (state = initialState, action) => {  
  switch (action.type) {
    case ADD_CARD:
      const exist = state.cart.find((x) => x.id === action.product.id);
      if (exist) {
        return {
          ...state,
          cart: state.cart.map((x) =>
            x.id === action.product.id ? { ...x, qty: x.qty + 1 } : x
          ),
        };
      } else
        return { ...state, cart: [...state.cart, { ...action.product, qty: 1 }] };
    case REMOVE_CARD:
        return {
          ...state,
          cart: state.cart.filter((x) => {
            return x.id !== action.product.id
        }),
        }
    case CLEAR_CARD: 
        return {
          ...state,
          cart: [],
        }
    case REMOVE_CARD_QTY:
      return {
        ...state,
        cart: state.cart.map((x) =>
          x.id === action.product.id ? { ...x, qty: x.qty - 1 } : x
        ),        
      }
    default: return state;
  }
};

// ACTION CREATORS
export const addCard = (product) => ({ type: ADD_CARD, product });
export const removeCard = (product) => ({ type: REMOVE_CARD, product });
export const clearCard = () => ({ type: CLEAR_CARD })
export const removeCardQty = (product) => ({ type: REMOVE_CARD_QTY, product })
