import '../styles/globals.css'
import Navbar from '../Components/Navbar'
import Head from 'next/head'
import CartProvider from '../Providers/cartProvider'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ecommerce</title>
      </Head>

      <CartProvider>
        <Navbar/>
        <div className='container'>
          <Component {...pageProps} />
        </div>
      </CartProvider>
    </>
    )
}

export default MyApp
