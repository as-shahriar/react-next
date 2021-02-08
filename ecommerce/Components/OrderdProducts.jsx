import OrderdItem from './OrderdItem'
const OrderdProducts = ({orderDetails}) => {
    return (
        <>
            <div style={{display:'flex',flexDirection:'column',marginBottom:'2rem'}}> 
                <span><strong>ID#{orderDetails.orderID}</strong></span>
                <span><strong>Name: </strong>{orderDetails.user.name}</span>
                <span><strong>Mobile: </strong>{orderDetails.user.mobile}</span>
                <span><strong>Address: </strong>{orderDetails.user.address}</span>
                <span><strong>Date: </strong>{orderDetails.date}</span>
            </div>

            {
                orderDetails.orders.map(item=>{
                return <OrderdItem key={item.id} item={item}/>
                })
            }
            
            <div style={{textAlign:'right'}}>
                <span><strong>Total:</strong> {orderDetails.totalPrice} </span>
            </div>
        </>
    );
};


export default OrderdProducts;