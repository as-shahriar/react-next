import {useCart} from '../Providers/cartProvider'
import {useState,useEffect} from 'react'
import { useRouter } from 'next/router'


const Checkout = () => {
    const {cart,addToCart} = useCart()
    const [form,setForm] = useState({
        name:null,
        mobile:null,
        address:null
    })
    const router = useRouter()
    const [is_completed,setCompleted] = useState(false)
    let total = 0
    cart.forEach(e=>{
        total += e.price*e.cart_qty
    })

    function nameChange(e){
        setForm({
            name:e.target.value.trim(),
            mobile:form.mobile,
            address:form.address
        })
    }
    function mobileChange(e){
        setForm({
            name:form.name,
            mobile:e.target.value.trim(),
            address:form.address
        })
    }
    function addressChange(e){
        setForm({
            name:form.name,
            mobile:form.mobile,
            address:e.target.value.trim()
        })
    }

    function onSubmit(){
        if(!form.name){
            alert("Name is required")
            return;
        }
        
        if(!form.mobile || !/^01[0-9]{9}$/.test(form.mobile)){
            alert("Mobile number is required")
            return;
        }
        if(!form.address){
            alert("Address is required")
            return;
        }

        fetch('http://localhost:3000/api/products',{
            method: 'POST',
            body: JSON.stringify(cart)
        }).then(res=>{
            if(res.status==201){
                fetch('http://localhost:3000/api/order',{
                    method: 'POST',
                    body: JSON.stringify({
                         user: form,
                         orders: cart
                    })
                }).then(res=>{
                    if(res.status==201){
                        setCompleted(true)
                        addToCart([])
                        res.json().then(data=>router.push(`/orders/${data.id}`))
                        
                    }else{
                        alert("Network Error!")
                    }
                }).catch(err=>{
                    alert(err)
                })
            }
            else if(res.status == 400){
                res.json().then(data=>{
                    let updatedCart = cart.filter(item=> item.id!=data.id)
                    addToCart(updatedCart);
                })
                alert("Some product is out of stock. Kindly check product availability and try again.")
            }
            else{
                alert("Network Error!")
            }
        }).catch(err=>{
            alert(err)
        })
    }
   
    useEffect(() => {
    }, [is_completed]);

    return (
        (!cart.length && !is_completed)? <h3 align="center">Your Cart is Empty</h3>:
        <>
            <h2>Check-Out</h2>
            <hr/>
            <p align="center" style={{fontSize:'1.5rem',margin:'1rem'}}>Contact Information</p>
            <div className="form-group">
                <input type="text" placeholder="Full Name" onChange={nameChange}/>
                <input type="text" placeholder="Mobile Number" onChange={mobileChange}/>
                <input type="text" placeholder="Address" onChange={addressChange}/>
                <span style={{marginTop: '1rem'}}><strong>Total Payable:</strong> {total.toFixed(2)}</span>
                <div className="button" onClick={onSubmit}>Confirm Order</div>
            </div>

            <style jsx>
                {
                    `
                        .form-group{
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                        }  
                        input[type="text"]{
                            width: 300px;
                            height: 30px;
                            margin-top: 1rem;
                            font-size: 1rem;
                            padding: 0.7rem;
                            border: none;
                            border-bottom: 1.5px solid #00000052;
                            outline: 0;
                        }
                        input[type="text"]:focus{
                            border-bottom: 2px solid #e94560;
                        }
                        .error{
                            border-bottom: 2px solid red!important;
                        }
                    `
                }
            </style>
        </>
    );
};

export default Checkout;