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
        padding: ' .6rem .7rem',
        display:'flex',
        flexDirection:'column'
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
                    <span style={product.price}><strong>$</strong> {item.price}</span>
                </div>
            </div>
        </Link>
    );
};

export default Product;