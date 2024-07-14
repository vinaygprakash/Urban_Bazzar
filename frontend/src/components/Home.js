import React from 'react'
import Footer from './Footer'
import ScrollBtn from './ScrollBtn';
import { Link } from 'react-router-dom';
import Navbarfront from './Navbarfront'

const Home = () => {
    return (
        <>
            <ScrollBtn />
            <Navbarfront/>
            <div className="contact Home">
                <div className="content">
                    <h1 style={{ fontSize: '3rem', color: 'white', fontWeight: 'bold', textShadow: '3px 3px 6px rgba(0,0,0,0.3)', marginBottom: '1rem' }}>Discover Our Fashion Collections</h1>
                    <h3 style={{ fontSize: '2rem', color: 'white', fontWeight: '600', textShadow: '2px 2px 5px rgba(0,0,0,0.2)', marginBottom: '0.75rem' }}>Fashion is What You Choose</h3>
                    <h5 style={{ fontSize: '1.5rem', color: 'white', fontWeight: '500', textShadow: '1px 1px 3px rgba(0,0,0,0.15)', marginBottom: '0.5rem' }}>Style is How You Make it Yours</h5>
                </div>
                {/* <Link className="temp mx-2" style={{ textDecoration: 'none', textAlign: 'center',border:'2px solid black',background:'white' }} to="/login" role="button">Shop Now</Link> */}
            </div>
            <Footer />
        </>
    )
}

export default Home;
