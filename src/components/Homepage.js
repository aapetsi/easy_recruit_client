import React from 'react'
import '../styles/HomePage.css'
import lady from '../assets/EasyRecruit-Web-Elements/Images/4283.png'
import { NavLink } from 'react-router-dom'
import todoIcon from '../assets/EasyRecruit-Web-Elements/ER_Icons/CV-Review.png'
import piggyBank from '../assets/EasyRecruit-Web-Elements/ER_Icons/piggy.png'
import timeIcon from '../assets/EasyRecruit-Web-Elements/ER_Icons/time.png'
import recruitLogo from '../assets/EasyRecruit-Web-Elements/ER_Icons/Recruitment.png'

const HomePage = () => {
  return (
    <div>
      <section className='mini-header'>
        <p>GET EMPLOYED</p>
        <div>
          <img
            className='lady-mini-header'
            src={lady}
            alt='lady-hand-shake'
            width='160'
            height='160'
          />
        </div>
        <p>WITH EASY RECRUIT</p>
      </section>
      <div className='main-image'>
        <div className='main-text'>
          <div>We start the</div>
          <div>Conversation</div>
        </div>
      </div>
      <section className='about-us'>
        <p>
          <strong>ABOUT</strong> US
        </p>
        <p className='about-sub-heading'>
          We are making it easier for recruiters &
          <br />
          HR professionals to find the best candidates
        </p>

        <p>
          The easy recruit is a global online recruitment solution, the first of
          <br />
          its kind designed to simplify the recruitment process for would-be
          <br />
          candidates and recruiters alike.
        </p>
        <p>
          At the heart of our product is innovation and we are committed on
          <br />
          changing the way employers meet employees.
        </p>
      </section>
      <section className='why-us'>
        <h2>
          WHY EASY<span>RECRUIT</span> ?
        </h2>
        <div className='why-us-details'>
          <div className='why-us-item'>
            <img src={todoIcon} alt='todo item' width='150' height='150' />
            <p>Do away with long hours reviewing CVS</p>
          </div>

          <div className='why-us-item'>
            <img src={piggyBank} alt='piggy bank' width='150' height='150' />
            <p>
              Save 60% or more on cost of job ads that deliver no real value
            </p>
          </div>

          <div className='why-us-item'>
            <img src={recruitLogo} alt='connection' width='150' height='150' />
            <p>
              Find the BEST MATCH on your mobile device from the comfort of your
              home or office
            </p>
          </div>

          <div className='why-us-item'>
            <img src={timeIcon} alt='time' width='150' height='150' />
            <p>Schedule interviews with the click of a button</p>
          </div>
        </div>
      </section>
      <div style={{ background: '#e8e8e8' }}>
        <section className='footer'>
          <div className='footer-about-us'>
            <h3>ABOUT US</h3>
            <p>
              We connect our candidates with their best possible internships by
              placing them into the world's fastest growing economies
            </p>
            <p>
              Numerous studies have shown that internship experience is more
              important for career success than college reputation, GPA or
              coursework completed.
            </p>
          </div>
          <div className='footer-useful-links'>
            <h3>USEFUL LINKS</h3>
            <div className='footer-links'>
              <a href='www.google.com'>How it works</a>
              <a href='www.google.com'>FAQ</a>
              <a href='www.google.com'>About Us</a>
              <a href='www.google.com'>Industries</a>
              <a href='www.google.com'>Contact</a>
            </div>
          </div>
          <div className='footer-contact-us'>
            <h3>CONTACT US</h3>
            <div>
              <p>+233 031-235-6789</p>
              <p>+233 024-123-4567</p>
              <p>contact@theeasyrecruit.com</p>
            </div>
          </div>
        </section>
        <hr />
        <section className='minor-footer'>
          <div>
            <p>Copyright (c) 2020. Easy Recruit LLC. All rights reserved</p>
            <NavLink to='/t-and-c'>Terms and Conditions</NavLink>
            <NavLink to='/privacy-policy'>Privacy Policy</NavLink>
          </div>
          <div className='socials'>
            <a>
              <i class='fab fa-facebook-square'></i>
            </a>
            <a>
              <i class='fab fa-twitter-square'></i>
            </a>
            <a>
              <i class='fab fa-instagram'></i>
            </a>
            <a>
              <i class='fab fa-pinterest-square'></i>
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default HomePage
