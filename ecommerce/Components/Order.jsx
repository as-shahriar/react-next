import Link from "next/link"
const Order = ({item}) => {
    return (
        <Link href={`/orders/${item.orderID}`}>
            <div>
                <div className="box">
                    <span>ID#{item.orderID}</span>
                    <span>{item.date}</span>
                    <span>Qty: {item.totalQty}</span>
                    <span className='price'><strong>$</strong> {item.totalPrice} </span>
          
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
                                grid-template-columns: 1fr 1fr 1fr 1fr;
                                cursor: pointer;
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
            </div>
        </Link>
    );
};


export default Order;