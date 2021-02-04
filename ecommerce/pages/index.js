import Product from '../Components/Product'
import Data from '../Data/products.json'
const style={
    container : {
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    },
    flex:{
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
}

export default function Home({products}) {
  return (
    <>
      <div style={style.container}>

      <div style={style.flex}>
      {
          products.map((item)=>{
            return <Product key={item.id} item={item} />
          })
      }
      </div>
      
      </div>


    </>
  )
}

export const getStaticProps = async(context)=>{
  return {
    props: {
      products: Data
    }
  }
}
