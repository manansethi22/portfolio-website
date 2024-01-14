import { useEffect } from 'react';
import Aos from 'aos';

import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/UI/Hero';
import Services from './components/UI/Services';
import Portfolio from './components/UI/Portfolio';
import Contact from './components/UI/Contact';

function App() {
  useEffect(() => {
    Aos.init();
  }, [])

  const backgroundColor = "#e9f5f8";  
  
  return(
    <>
    <div style={{ backgroundColor }}>
    <Header/>
    <main>
    <Hero/>
    <Services/>
    <Portfolio/>
    <Contact/>

    </main>
    
    <Footer/>
    </div>


    
    </>
  )
}

export default App;
