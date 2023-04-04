import React, { useContext } from 'react'
import Items from './Items';
import { CartContext } from './Cart';
export default function ContextCart() {
    const { item , clearCart,totalItem , totalAmount} = useContext(CartContext);
    // if(item.length === 0) {
    //     return (
    //         <>
    //             <header>
    //                 <div className='continue-shopping flex container'>
    //                     <div className='flex'>
    //                         <img src="./images/leftArrow.png" alt="Something is wrong with arrow-icon" className='arrow-icon' />
    //                         <h3>Continue shopping</h3>
    //                     </div>
    //                     <div className="cart-item">
    //                         <img src="./images/add_to_cart.png" alt="cart add to cart icon" />
    //                         <p>0</p>
    //                     </div>
    //                 </div>
    //             </header>
    //         </>
    //     )
    // }
    return (

        <div>
            <header>
                <div className='continue-shopping flex container'>
                    <div className='flex'>
                        <img src="./images/leftArrow.png" alt="Something is wrong with arrow-icon" className='arrow-icon' />
                        <h3>Continue shopping</h3>
                    </div>
                    <div className="cart-item">
                        <img src="./images/add_to_cart.png" alt="cart add to cart icon" />
                        <p>7</p>
                    </div>
                </div>
            </header>

            <section className='main-cart-section container'>
                <div className="shopping-cart-section">
                    <h1>Shopping Cart</h1>
                    <p>You have <span>{totalItem}</span> items in shopping cart</p>
                </div>

                <div className='cart-items-container'>
                    {
                        item.map((curItem, i) => {
                            return <Items key={i} {...curItem} />
                        })
                    }
                </div>

                <div className="Total-item ">
                    <h3>Cart Total:<span>{totalAmount}</span></h3>
                </div>
                <div className="cart-btn">
                    <input type='button'className="checkout-btn btn" value='CHECKOUT'/>
                    <input type='button' className="CLEAR-btn btn"value='CLEAR CART' onClick={()=>clearCart()}/>
                </div>
               
            </section>
        </div>
    )
}
