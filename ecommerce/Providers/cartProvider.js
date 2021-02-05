import {createContext,useState,useContext,useEffect} from 'react'

const CartContext = createContext()

export function useCart() {
    return useContext(CartContext)
}




export default function CartProvider({children}) {


    useEffect(() => {
        const localCart = JSON.parse(localStorage.getItem("cart"));
        if(localCart)   setCart(localCart)
    }, []);


    const [cart, setCart] = useState([])

    function addToCart(products){
        localStorage.setItem("cart",JSON.stringify(products))
        setCart(products)
    }
    function updateCartQty({id,qty}){
        let products = cart.map(product=>{
            if(product.id==id) product.cart_qty = qty
            return product
        })
        localStorage.setItem("cart",JSON.stringify(products))
        setCart(products)
    }

    return (
      <CartContext.Provider value={{cart,addToCart,updateCartQty}}>
            {children}
      </CartContext.Provider>
    )
  }
