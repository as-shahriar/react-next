import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faChevronCircleDown} from '@fortawesome/free-solid-svg-icons'
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React,{useReducer} from 'react'
import {useCart,useAddToCart} from '../Providers/cartProvider'



function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {quantity: state.quantity + 1};
      case 'decrement':
        if(state.quantity <= 1) return {quantity: state.quantity};
        return {quantity: state.quantity - 1};
      default:
        throw new Error();
    }
  }

const CartItem = ({item}) => {
    const cart = useCart()
    const addToCart = useAddToCart()
    const [state, dispatch] = useReducer(reducer,{quantity: item.cart_qty});
    const decrement_class = (state.quantity>1)? 'pointer quantity-div':'pointer quantity-div disabled';
    function remove(){
        addToCart(
            cart.filter(product=>{
                return product.id!=item.id
            })
        )
    }
    return (
        <>
        <div className="box">
            <img className='image'  src={item.image} alt="product image"/>
            <span>{item.name} </span>
                <div>
                    <div className="pointer quantity-div"  onClick={() => dispatch({type: 'increment'})}>
                        <FontAwesomeIcon icon={faChevronCircleUp} />
                    </div>
                        <div className="quantity-div">{state.quantity}</div>
                    <div className={decrement_class} onClick={() => dispatch({type: 'decrement'})} >
                        <FontAwesomeIcon icon={faChevronCircleDown} />
                    </div>
                </div>
                <div>
                    <FontAwesomeIcon icon={faDollarSign} />
                    <span className='price'>{item.price} </span>
                </div>

                <div className="pointer" onClick={remove}>
                    <FontAwesomeIcon icon={faTrash} />
                </div>

            <style jsx>
                {
                    `
                    .image{
                        width: 40px;
                        height: 40px;
                    }

                    .box{
                        display: grid;
                        grid-gap: 20px;
                        grid-template-columns: 1fr 5fr 1fr 1fr 1fr;
                    }

                    .box > *{
                        align-self: center;
                    }
                    

                    .quantity-div{
                        text-align: center;
                        user-select: none;
                    }
                    
                    .price{
                        margin-left:2px;
                    }

                    .pointer{
                        cursor:pointer;
                    }
                    .disabled{
                        opacity: 0.2;
                        cursor: auto;
                    }

                    @media (max-width: 850px) {
                        .box{
                            display:flex;
                            justify-content:center;
                            flex-wrap:wrap;
                            padding: 0 1rem;
                        }
                    }

                    
                    `
                }
            </style>
        </div>
        <hr/>
        </>
    );
};


export default CartItem;