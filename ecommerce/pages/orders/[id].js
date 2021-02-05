import OrderedProducts from '../../Components/OrderdProducts'
const OrderDetails = ({orderDetails}) => {
    return   <OrderedProducts orderDetails={orderDetails}/>
    
}

export default OrderDetails;

export async function getServerSideProps({params}){
    let orderDetails
    await fetch(`http://localhost:3000/api/order/?id=${params.id}`).then(res=>res.json()).then(data=>{
        orderDetails = data
    }).catch(err=>{if(err)console.log(err)})
    return {
            props: {
                orderDetails
            }
        }
    
}