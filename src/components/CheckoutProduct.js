import React, { forwardRef } from 'react'
import '../css/CheckoutProduct.css'
import { useStateValue } from './StateProvider'
import { actionTypes } from '../reducer'

const CheckoutProduct = forwardRef(({ id, title, price, rating, image, hideButton }, ref) => {

    // eslint-disable-next-line
    const [{ }, dispatch] = useStateValue()

    const RemoveFromBasket = () => {
        dispatch({
            type: actionTypes.REMOVE_BASKET,
            id: id
        })
    }

    return (
        <div ref={ref} className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((_) => (
                            // eslint-disable-next-line
                            <p>⭐️</p>
                        ))
                    }
                </div>
                {!hideButton && (
                    <button onClick={RemoveFromBasket}>Remove from Basket</button>
                )}

            </div>
        </div>
    )
})

export default CheckoutProduct
