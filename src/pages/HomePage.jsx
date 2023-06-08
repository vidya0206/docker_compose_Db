import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import HeroSection from '../components/Hero/Hero'
import Services from '../components/Services/Services'
import Properties from '../components/Properties/Properties'
import KnowUs from '../components/KnowUs/KnowUs'
import LatestListings from '../components/LatestListings/LatestListings'
import Award from '../components/Award/Award'

const HomePage = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <Services />
            <Properties />
            <KnowUs />
            <LatestListings />
            <Award />
            <Footer />
        </div>
    )
}

export default HomePage
