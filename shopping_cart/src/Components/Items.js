
import { useContext } from 'react';
import './Cart';
import { CartContext } from './Cart';
export default function Items({ id, description, title, img, price, amount ,quantity}) {
    const { removeItem, increment, decrement } = useContext(CartContext);
    return (
        <div className="cart-items  ">
            <div className="items-info flex">
                <div className="products-img">
                    <img src={img} alt="product image" />
                </div>
                <div className="title">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>
                <div className='add-quantity'>
                    <i className="fa-solid fa-plus" onClick={() => increment(id)}></i>
                    <input type="text" name="" id="" placeholder={quantity} className='product-quantity-btn' />
                    <i className="fa-solid fa-minus" onClick={() => decrement(id)}></i>
                </div>
                <div className="price">
                    <h3>{price}</h3>
                </div>
                <div className="remove-item">
                    <i className="fas fa-trash-alt add" onClick={() => removeItem(id)}></i>
                </div>
            </div>
        </div>
    )
}
