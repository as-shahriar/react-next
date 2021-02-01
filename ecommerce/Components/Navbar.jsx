
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
    logoBox:{
        display: 'flex',
        alignItems: 'center',
    },
    logo:{
        width: '40px',
        height: '40px'
    },
    title:{
        color:'white',
        fontSize: '1.2rem',
        marginLeft: '5px'
    },
    links:{
        color: 'white',
        fontSize: '1.5rem',
        marginLeft: '1.5rem'
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
        boxShadow: '3px 3px 5px #000000ba'
    }
} 

const Navbar = () => {
    return (
        <div style={navbar.nav}>
            <div style={navbar.logoBox}>
                <img style={navbar.logo} src="images/logo.png" alt="logo"/>
                <span style={navbar.title}>E-Dokan</span>
            </div>
            <div style={{position:'relative'}}>
                <i style={navbar.links} class="fa fa-shopping-cart" aria-hidden="true"></i>
                <span style={navbar.counter}>4</span>
                
                <i style={navbar.links} class="fa fa-briefcase" aria-hidden="true"></i>
            </div>
        </div>
    );
};

export default Navbar;