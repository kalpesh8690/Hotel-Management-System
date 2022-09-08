import React from 'react'
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';

export default function logout() {
    return (
        <>
        <Hero hero="defaultHero">
        </Hero>
        <Banner  title="Thank You" subtitle="for visit our hotel website">
        <Link  to={"./"} className="btn btn-success">
                      Visit again
                </Link>
        </Banner>
        <Services/> 
        </>

    )
}
