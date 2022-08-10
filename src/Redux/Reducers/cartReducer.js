const ADD_CARD = "ADD_CARD";
const REMOVE_CARD = "REMOVE_CARD";

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
        }
        ),
        }
    default: return state;
  }
};

// ACTION CREATORS
export const addCard = (product) => ({ type: ADD_CARD, product });
export const removeCard = (product) => ({ type: REMOVE_CARD, product });
