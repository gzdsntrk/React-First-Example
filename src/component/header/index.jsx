import React from 'react'
import TopHeader from '../top-header'

function Header() {
  return (
    
    <div className="header">
    <TopHeader />
    <div className="menu"> 
        <div className="container">
            <div className="menu-box">
                <div className="logo">
                    <img src="/image/logo1.png" alt="" />
                </div>   
                <div className="list">
                    <ul>
                        <li>HOME</li>
                        <li>PORTFOLIO</li>
                        <li>BLOG</li>
                        <li>PAGES</li>
                        <li>FEATURES</li>
                        <li>MEGA MENU</li>
                        <li>CONTANCT</li>
                    </ul>
                </div>
                <div className="search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div id="menuToggle">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
            </div>
        </div>
    </div> 
</div>
    
  )
}

export default Header