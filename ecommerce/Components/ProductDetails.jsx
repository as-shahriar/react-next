import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const style = {
    container:{
        display:'flex',
        justifyContent:'center'
    }
}

const ProductDetails = () => {
    return (
        <div style={style.container}>
            <div className='card'>
                <img className='image'  src="https://m.media-amazon.com/images/I/81hggFz2DvL._AC_UL480_QL65_.jpg" alt="product image"/>
                <div>
                    <h2>T-Shirt</h2>
                    <div>
                        <FontAwesomeIcon icon={faDollarSign} />
                        <span className='price'>450</span>
                    </div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quia veritatis excepturi, totam laboriosam laudantium iusto eaque voluptatibus, sapiente minus maxime dolorum facere possimus aspernatur doloribus a autem? Aliquid, obcaecati.</p>
                    <span>In Stock: 50</span>
                    <div className='button'>Add to Cart</div>
               </div>
            </div>
            <style jsx>
            {
                `
                .card{
                    width: 800px;
                    box-shadow: #00000021 2px 2px 15px;
                    display: flex;
                    padding: 1rem 3rem;
                    margin-top:2rem;
                }
                .image{
                    width: 50%;
                    margin-right: 1rem;
                }
                .price{
                    margin-left: 3px;
                }
                .button{
                    margin-top: 1rem;
                    background-color: #e94560;
                    color: white;
                    width: 10rem;
                    height: 2.5rem;
                    display:flex;
                    justify-content:center;
                    align-items: center;
                    box-shadow: #00000021 2px 2px 15px;
                    cursor: pointer;
                }


                @media (max-width: 850px){
                    .card{
                        width: 80%;
                        flex-direction: column;
                        align-items: center;

                    }
                } 
                `
            }
        </style>
        </div>

        
    );
};

export default ProductDetails;