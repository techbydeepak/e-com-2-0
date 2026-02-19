import React, { useContext } from 'react'
import "./CartItems.css"
import remove_icon from "../../assets/remove.webp"
import { ShopContext } from '../../Context/ShopContext'
import { Link } from 'react-router-dom'

const CartItems = () => {

    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            
            {/* Header */}
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>

            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id} className='cartitems-format'>
                            <img 
                                src={e.image} 
                                alt="" 
                                className="carticon-product-icon"
                            />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>

                            <button className='cartitems-quantity'>
                                {cartItems[e.id]}
                            </button>

                            <p>${e.new_price * cartItems[e.id]}</p>

                            <img 
                                src={remove_icon} 
                                alt="" 
                                className="cartitems-remove-icon"
                                onClick={() => removeFromCart(e.id)}
                            />
                        </div>
                    )
                }
                return null;
            })}

            {/* Bottom Section */}
            <div className="cartitems-down">

                <div className="cartitems-total">
                    <h2>Cart Totals</h2>

                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>

                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>

                    <div className="cartitems-total-item total-final">
                        <p>Total</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>

                   <Link to="/Payment"> <button>PROCEED TO CHECKOUT</button></Link>
                   
                </div>

                <div className="cartitems-promocode">
                    <p>If you have a promo code, enter it here</p>

                    <div className="cartitems-promobox">
                        <input type='text' placeholder='Promo code'/>
                        <button>Submit</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CartItems
