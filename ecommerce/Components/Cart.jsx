
import CartItem from './CartItem'


let ar = [0,1,2,3,4,5]
const Cart = () => {
    return (
        <>
            <h2>Shopping Cart</h2>
            <hr/>

            {
                ar.map((item)=>{
                    return <CartItem key={item}/>
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