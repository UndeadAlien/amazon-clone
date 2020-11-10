import React from 'react'
import '../styles/Checkout.css'

import { useStateValue } from '../StateProvider';
import { Link } from 'react-router-dom'

import Subtotal from '../components/Subtotal'
import CheckoutProduct from './CheckoutProduct';
import FlipMove from 'react-flip-move';

function Checkout() {

    const [{ basket, user }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                {<img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />}

                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Cart is Empty</h2>
                        <Link to="/">
                            <button className="empty__button">Continue Shopping</button>
                        </Link>
                    </div>
                ) : (
                        <div>
                            <h3>Hello, {user?.email}</h3>
                            <h2 className="checkout__title">Shopping basket</h2>
                            <FlipMove appearAnimation="fade" enterAnimation="fade" leaveAnimation="fade">
                                {basket.map((item, index) => (
                                    <div key={index}>
                                        <CheckoutProduct
                                            id={item.id}
                                            title={item.title}
                                            image={item.image}
                                            price={item.price}
                                            rating={item.rating}
                                        />
                                    </div>
                                ))}
                            </FlipMove>
                        </div>
                    )}
            </div>

            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
