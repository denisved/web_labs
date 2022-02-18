import React, { useState, useEffect } from 'react'

import { CartSec, HeadText, Counter, RegText } from './CartPage.elements'
import { ItemSec } from '../ItemPage/ItemPage.elements'
import { connect } from 'react-redux'
import { CartItem } from '../../components'


const CartPage = ({ cart }) => {
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let count = 0;
        let totalPrice = 0;

        cart.forEach(item => {
            count += item.qty
            totalPrice += item.qty * item.price
        });

        setCartCount(count);
        setTotalPrice(totalPrice);
    }, [cart, cartCount, totalPrice])

    return (
        <div>
            <CartSec>
                <HeadText>Shopping Cart</HeadText>
                <Counter>
                    <RegText>You have added {cartCount} cars to the cart</RegText>
                    <RegText>Your total price to pay: {totalPrice} dollars  </RegText>
                </Counter>
                <ItemSec>
                {cart.map((product) => (
                    <CartItem key={product.id} product={product} />
                ))}
                <iframe src="http://www.staggeringbeauty.com/" width="698" height="798"></iframe>
                </ItemSec>
            </CartSec>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(CartPage);
