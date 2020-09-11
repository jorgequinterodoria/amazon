import React from 'react'
import '../css/Product.css'
import { useStateValue } from './StateProvider'
import { actionTypes } from '../reducer'

function Product({ id, title, price, rating, image }) {
    // eslint-disable-next-line
    const [{ }, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: actionTypes.SET_BASKET,
            item: {
                id,
                title,
                price,
                rating,
                image,
            }
        })
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map((_) => (
                            // eslint-disable-next-line
                            <p>⭐️</p>
                        ))
                    }
                </div>
            </div>

            <img src={image} alt="" />
            <button onClick={addToBasket}>Añadir al carrito</button>
        </div>
    )
}

export default Product
