
import React from "react";
import formatCurrency from "../util";
import Fade from "react-reveal/Fade";

function Cart(props) {
    const { cartItems, removeProducts } = props;
    const itemPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0);
    const totalPrice = itemPrice;

    return (
        <>

            {
                cartItems.length === 0 ? 
                <div className="empty-price">سبد خرید خالی است</div> 
                : <div className="show-price">تعداد سفارشات شما : {cartItems.length}</div>
            }

            <div className="cart-item">
                {cartItems.map((item) => (
                    <Fade left>
                        <div className="product-item" key={item.id}>
                            <div className="product-detail">
                                <img src={item.image} alt="" />
                                <h2>{item.title}</h2>
                            </div>
                            <div className="product-price">
                                <div className="price">
                                    <span>{formatCurrency(item.price)}</span>
                                    <span className="qty">{item.qty} خرید</span>
                                </div>
                                <div className="remove-item">
                                    <button onClick={() => removeProducts(item)}>حذف از سبد</button>
                                </div>
                            </div>
                        </div>
                    </Fade>
                ))}
            </div>
            <div className="total-price">
                <div className="total-text">مجموع قیمت : </div>
                <div className="total">{formatCurrency(totalPrice)}</div>
            </div>
        </>
    );
}

export default Cart;
