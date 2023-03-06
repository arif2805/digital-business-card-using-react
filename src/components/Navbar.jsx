import {useState} from 'react'
//import {AiOutlineMenu} from 'react-icons/ai'
function Navbar() {
  return (
    <div className='navbar'>
        <img src='src\assets\20220524223204_IMG_0992.jpg' width='200px'/>
        <h2>Mohammad Ariful Islam</h2> 
        <h4 className='sub-title'>Frontend Developer</h4>
        <div>
            <button className="btn1 btn-box"><a href="">
                
                <span>Email</span></a></button>
            <button className="btn2 btn-box"><a href="">LinkedIn</a></button>
        </div>
    </div>
  ) 
}

export default Navbar