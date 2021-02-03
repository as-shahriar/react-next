import {createContext,useState,useContext} from 'react'

const CartContext = createContext()
const AddToCartContext = createContext()

export function useCart() {
    return useContext(CartContext)
}
export function useAddToCart() {
    return useContext(AddToCartContext)
}



export default function CartProvider({children}) {
    const [cart, setCart] = useState([])

    function addToCart(products){
        setCart(products)
    }
    function updateCartQty({id,qty}){
        let products = cart.map(product=>{
            if(product.id==id) product.cart_qty = qty
            return product
        })
        setCart(products)
    }

    return (
      <CartContext.Provider value={cart}>
          <AddToCartContext.Provider value={addToCart}>
            {children}
          </AddToCartContext.Provider>
      </CartContext.Provider>
    )
  }