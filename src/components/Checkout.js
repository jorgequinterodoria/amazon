import React from 'react'
import '../css/Checkout.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import FlipMove from 'react-flip-move'




function Checkout() {
    // eslint-disable-next-line
    const [{ basket, user }] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__left">

                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt=""
                />
                {basket?.length === 0 ? (
                    <div>
                        <h3>Hello, {!user ? 'Guest' : `${user.email}`}</h3>
                        <h2>Your shopping Basket is empty</h2>
                        <hr />
                        <br />
                        <img
                            className="checkout_imageEmpty"
                            src="https://image.freepik.com/vector-gratis/carrito-compras-vista-superior-lateral-carrito-supermercado-vacio-aislado_107791-3423.jpg"
                            alt=""
                        />

                        <br />
                        <p>Dont have articles in your basket, to buy one or more articles, click on "Add to Basket" under item</p>
                    </div>

                ) : (
                        <div>
                            <h3>Hello, {!user ? 'Guest. You need to login to continue your shopping' : `${user.email}`}</h3>
                            <h2 className="checkout__title">Your shopping Basket</h2>
                            <FlipMove>


                                {basket.map((item) => (
                                    <CheckoutProduct
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        price={item.price}
                                        rating={item.rating}
                                        image={item.image}
                                    />
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
