import Product from '../Components/Product'
import Link from 'next/link'

const style={
    container : {
      width: '100%',
      padding: '2rem 5rem',
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
let ar = [0,1,2,3,4,5,6,7,8,9,10,11,12,13]

export default function Home() {
  return (
    <>
      

      <div style={style.container}>

      <div style={style.flex}>
      {
          ar.map((item)=>{
            return <Product key={item} item={{id:item}} />
          })
      }
      </div>
      
      </div>


    </>
  )
}
