import CartItem from './CartItem'
import {useCart} from '../Providers/cartProvider'


const Cart = () => {
    const {cart} = useCart()
    let total = 0
    cart.forEach(e=>{
        total += e.price*e.cart_qty
    })
    return (
        <>
            <h2>Shopping Cart</h2>
            <hr/>
        

            {
                cart.map((item)=>{
                    return <CartItem key={item.id} item={item}/>
                })
            }


            {
                (cart.length)? 
                <div className="right">
                    <span><strong>Total:</strong> {total.toFixed(2)} </span>
                    <div className="button">Check Out</div>
                </div> : <p align="center">Your Cart is Empty</p> 
            }
            


            <style jsx>
                {
                    `
                        .right{
                            display:flex;
                            flex-direction:column;
                            align-items:flex-end;
                        }
                    `
                }
            </style>
        
        </>
    );
};


export default Cart;