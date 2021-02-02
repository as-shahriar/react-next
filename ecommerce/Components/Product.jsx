import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'


const product = {
    card: {
        width: 'auto',
        height: 'auto',
        boxShadow: '#00000021 2px 2px 15px',
        margin: '1rem',
        borderRadius: '7px',
        cursor: 'pointer'
    },
    image:{
        width: '200px',
        height: '200px',
        padding: '1rem'
    },
    details:{
        padding: ' .6rem .7rem'
    },
    price:{
        marginLeft: '3px'
    }
}

const Product = ({item}) => {
    return (
        <Link href={`product/${item.id}`}>
            <div style={product.card}>
                <img style={product.image} src={item.image} alt="product image"/>
                <div style={product.details}>
                    <span>{item.name}</span>
                    <div>
                        <FontAwesomeIcon icon={faDollarSign} />
                        <span style={product.price}>{item.price}</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Product;