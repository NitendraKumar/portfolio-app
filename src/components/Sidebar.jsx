import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      
       <div>
         <nav href='#navbar' className='js-colorlib-nav-toggle colorlib-nav-toggle' 
         data-toggle='collapse' data-target='#navbar' area-expanded='false' area-controls='navbar'><i/>
         </nav>
         <aside id='colorlib-aside' className='border js-fullheight'>
           <div className='text-center'>
             <div className='author-img' style={{backgroundImage:'url(images/about.jpg  )'}}/>
             <h1 id='colorlib-logo'><a href='index.html'>Nitendra Kumar</a></h1>
             <span className='email'><i className='icon-mail'></i>nitinjnumca09@gmail.com</span>
             <span className='phone'><i className='icon-phone'></i> (+65) 88897574</span>
           </div>
           <br/>
           <nav id='colorlib-main-menu' role='navigation' className='navbar'>
             <div id='navbar' className='collapse'>
               <ul>
                  <li className='active'><a href='#home' data-nav-section='home'>Home</a></li>
                  <li><a href='#about' data-nav-section='about'>About</a></li>
                  <li><a href='#services' data-nav-section='services'>Services</a></li>
                  <li><a href='#skills' data-nav-section='skills'>Skills</a></li>
                  <li><a href='#education' data-nav-section='education'>Education</a></li>
                  <li><a href='#experience' data-nav-section='experience'>Experience</a></li>
                  <li><a href='#contact' data-nav-section='contact'>Contact</a></li>
               </ul>
             </div>
           </nav>
           <div className='colorlib-footer'>
             <p>
               <small className='text-uppercase'>
                 Made with <i className='icon-heart' area-hidden='true'></i> and <i className='icon-music2' area-hidden='true'></i>
                </small>
             </p>
           </div>
         </aside>
       </div>
      
    )
  }
}
