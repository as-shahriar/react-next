import ProductDetailsPage from '../../Components/ProductDetails'
import Data from '../../Data/products.json'

const ProductDetails = ({product}) => {
    return <ProductDetails product={product}/> 
};


export default ProductDetailsPage;

export const getStaticProps = async(context)=>{
    let product;
    Data.map(item=>{
        if(item.id == context.params.id){
            product = item
        }
    })
    return {
      props: {
        product
      }
    }
}

export const getStaticPaths = async()=>{
    const paths = Data.map(product=>(
        { 
            params: {
                id : product.id.toString()
            } 
        }
    ))
    return {
        paths, fallback: false
    }
}


  