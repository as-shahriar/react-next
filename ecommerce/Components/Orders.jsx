import Order from './Order'
import {useEffect,useState} from 'react'

const Orders = () => {
    const [orders,setOrders] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/api/order').then(res=>res.json()).then(data=>{
            setOrders(data)
        }).catch(err=>{
            alert("Network Error!")
        })
    }, []);
    return (
        <>
           <h2>My Orders</h2>
            <hr/>
            {
                orders.map(order=>{
                    return <Order key={order.orderID} item={order}/>
                })
            }

            {
                 (!orders.length)? <h3 align="center">No order history available</h3>:null
            }
        </>
    );
};


export default Orders;