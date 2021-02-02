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
        height: '220px',
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
                <img style={product.image} src="https://m.media-amazon.com/images/I/81hggFz2DvL._AC_UL480_QL65_.jpg" alt="product image"/>
                <div style={product.details}>
                    <span>Shirt</span>
                    <div>
                        <FontAwesomeIcon icon={faDollarSign} />

                        <i className="fa fa-usd" aria-hidden="true"></i>
                        <span style={product.price}>450</span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Product;