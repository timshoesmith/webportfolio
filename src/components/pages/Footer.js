import React from 'react'
import { Button } from'../Button';
import './Footer.css'
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div className='footer-container'>
           <section className='footer-subscription'>
               
               </section> 
               <div className='footer-links'>
                    <div className='footer-link-wrapper'>
                        <div class='footer-link-items'>
                            <h2>Websites</h2>
                            <Link to='/sign-up'>HTML/CSS</Link>
                            <Link to='/'>REACT</Link>
                            <Link to='/'>HTML/CSS/JavaScipt</Link>
                            <Link to='/'>WordPress</Link>
                        </div>
                        <div class='footer-link-items'>
                            <h2>Programming</h2>
                            <Link to='/'>C#</Link>
                            <Link to='/'>Python</Link>
                            <Link to='/'>JQuery</Link>
                            <Link to='/'>PHP</Link>
                        </div>
                    </div>
                    <div className='footer-link-wrapper'>
                            <div class='footer-link-items'>
                                <h2>Fun Programs</h2>
                                <Link to='/'>Think a Number</Link>
                                <Link to='/'>21 Card Trick</Link>
                                <Link to='/'>Princess Card Trick</Link>
                                <Link to='/'>Cipher</Link>
                            </div>
                            <div class='footer-link-items'>
                                <h2>Contact</h2>
                                <Link to='/'>Email</Link>
                                <Link to='/'>Form</Link>
                                <Link to='/'>Mobile</Link>
                                <Link to='/'>Twitter</Link>
                            </div>
                    </div>
               </div>
               <section className='social-media'>
                   <div className='social-media-wrap'>
                       <div className='footer-logo'>
                           <Link to = '/' className='social-logo'>
                           T=&gt;S
                          <i class="fas fa-atom"></i>
                           </Link>
                       </div>
                       <small className='website-rights'> T=&gt;S @2020</small>
                       <div className='social-icons'>
                       <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link linkedin'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
                       </div>
                   </div>
               </section>
        </div>
    )
}
export default Footer
