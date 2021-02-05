const OrderdItem = ({item}) => {
    return (
        <>

        
        <div className="box">
            <img className='image'  src={item.image} alt="product image"/>
            <span>{item.name} </span>
            <span>Quantity: {item.cart_qty}</span>
            <div>
                <span className='price'><strong>$</strong> {item.price*item.cart_qty} </span>
            </div>

                

            <style jsx>
                {
                    `
                    .image{
                        width: 40px;
                        height: 40px;
                    }

                    .box{
                        display: grid;
                        grid-gap: 20px;
                        grid-template-columns: 1fr 5fr 1fr 1fr 1fr;
                    }

                    .box > *{
                        align-self: center;
                    }
                    

                   
                    
                    .price{
                        margin-left:2px;
                    }

                    .pointer{
                        cursor:pointer;
                    }
                   

                    @media (max-width: 850px) {
                        .box{
                            display:flex;
                            justify-content:center;
                            flex-wrap:wrap;
                            padding: 0 1rem;
                        }
                    }

                    
                    `
                }
            </style>
        </div>
        <hr/>
        </>
    );
};


export default OrderdItem;