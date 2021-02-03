import CartItem from './CartItem'
import {useCart} from '../Providers/cartProvider'


const Cart = () => {
    const cart = useCart()
    return (
        <>
            <h2>Shopping Cart</h2>
            <hr/>

            {
                cart.map((item)=>{
                    return <CartItem key={item.id} item={item}/>
                })
            }

            
            <div className="right">
                <span><strong>Total:</strong> 545 </span>
            <div className="button">Check Out</div>

            </div>


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