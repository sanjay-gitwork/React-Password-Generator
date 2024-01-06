import React from 'react';
import PasswordGenerator from '../PasswordGenerator';
import Footer from '../navigations/Footer';
import TopNavigation from '../navigations/TopNavigation';


function Home() {
  return (
    <>
        
        <div className='gradient-background'>
        <TopNavigation></TopNavigation>
           
            <PasswordGenerator></PasswordGenerator>
            <Footer></Footer>
        </div>
        
    </>
    
  )
}

export default Home