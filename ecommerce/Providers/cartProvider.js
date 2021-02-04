import {createContext,useState,useContext,useEffect} from 'react'

const CartContext = createContext()

export function useCart() {
    return useContext(CartContext)
}




export default function CartProvider({children}) {
    const [cart, setCart] = useState([])

    useEffect(() => {
        // console.log(JSON.parse(localStorage.getItem("cart")));
        
    }, [cart]);
    function addToCart(products){
        setCart(products)
        localStorage.setItem("cart",JSON.stringify(products))
    }
    function updateCartQty({id,qty}){
        let products = cart.map(product=>{
            if(product.id==id) product.cart_qty = qty
            return product
        })
        setCart(products)
    }

    return (
      <CartContext.Provider value={{cart,addToCart,updateCartQty}}>
            {children}
      </CartContext.Provider>
    )
  }
