import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const navbar = {
    nav:{
        backgroundColor: '#1a1a2e',
        height: '55px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 1rem'
    },
    title:{
        color:'white',
        fontSize: '1.2rem',
        marginLeft: '5px',
        cursor: 'pointer'
    },
    links:{
        color: 'white',
        fontSize: '1.5rem',
        marginLeft: '1.5rem',
        cursor: 'pointer'
    },
    counter:{
        width: '1.6rem',
        height: '1.6rem',
        backgroundColor: '#e94560',
        color:'white',
        padding: '.5rem',
        position: 'absolute',
        borderRadius: '50%',
        left:'40px',
        top: '-11px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '3px 3px 5px #000000ba',
        cursor: 'pointer'

    }
} 

const Navbar = () => {
    return (
        <div style={navbar.nav}>
            <Link href="/">
                <span style={navbar.title}>E-Dokan</span>
            </Link>
            <div style={{display:'flex'}}>
                <Link href="/cart">
                    <div style={{position:'relative'}}>
                        <FontAwesomeIcon style={navbar.links} icon={faShoppingCart} />
                        <span style={navbar.counter}>4</span>
                    </div>
                </Link>
                <FontAwesomeIcon style={navbar.links} icon={faBriefcase} />

            </div>
        </div>
    );
};

export default Navbar;