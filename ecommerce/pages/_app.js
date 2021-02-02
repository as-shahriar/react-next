import '../styles/globals.css'
import Navbar from '../Components/Navbar'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ecommerce</title>
      </Head> 
      <Navbar/>
      <div className='container'>
        <Component {...pageProps} />
      </div>
    </>
    )
}

export default MyApp
