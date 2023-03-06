import {useState} from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'

export default function App(){
  return( 
    <div className='container'>
      <Navbar/>
      <About/>
      <Footer/>

    </div>
  )
}
