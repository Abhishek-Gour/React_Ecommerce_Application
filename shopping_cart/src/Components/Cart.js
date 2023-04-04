import React, { createContext, useEffect, useReducer} from 'react'
import './Cart.css'
import ContextCart from './ContextCart'
import { Products } from './Products'
import { reducer } from './Reducer'
const CartContext = createContext();
const initialState = {
  item: Products,
  totalAmount: 0,
  totalItem: 0,
};
export default function Cart() {
  const [state, dispatch] = useReducer(reducer, initialState);
  // Delete the individual element
  const removeItem = (id) => {
    return dispatch({
      type: 'REMOVE_ITEM',
      payload: id,
    })
  }
  // We wil use useEffect to updatae data

  useEffect(() => {
    dispatch({type:'GET_TOTAL'});
    console.log('Hii fuctionality is done');
  },[state.item]);
  // DECREMENT ITEM
  function decrement(id) {
    return dispatch({
      type: 'DECREMENT_ITEM',
      payload: id,
    })
  }
  // INCREMENT ITEM
  const increment = (id) => {
    return dispatch({
      type: 'INCREMENT_ITEM',
      payload:id,
    });
  }
  // clear cart

  const clearCart = () => {
    return dispatch({
      type: 'CLEAR_CART',
    })
  }
  return (

    <CartContext.Provider value={{ ...state, removeItem ,clearCart,increment,decrement,}}>
      <ContextCart />
    </CartContext.Provider>
  )
}
export { CartContext }
