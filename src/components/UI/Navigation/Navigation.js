import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'

import logo from '../../../assets/images/logo.svg'
import discover from '../../../assets/images/discover.svg';
import library from '../../../assets/images/library.svg';
import profile from '../../../assets/images/profile.svg';
import Modal from '../../UI/Modal/Modal';

import Input from '../Input/Input';


const Navigation = props => (
  <div className="navigation">
    {/* <Modal /> */}
    <div className="navigation_item links_wrraper">
      <NavLink activeClassName="active" className="left_links" exact to='/'>
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="nav_icon" fillRule="evenodd" clipRule="evenodd" d="M15.4012 7.31855C15.684 7.00965 15.6567 6.53621 15.3403 6.26135L8.36994 0.202419C8.05356 -0.0724364 7.54632 -0.0666786 7.2366 0.215399L0.242572 6.58439C-0.0671508 6.86647 -0.0823522 7.33931 0.208915 7.64007L0.384265 7.82149C0.675177 8.12226 1.1454 8.15812 1.43387 7.90134L1.95657 7.43633V14.2442C1.95657 14.6619 2.29725 15 2.7174 15H5.44369C5.86384 15 6.20453 14.6619 6.20453 14.2442V9.48143H9.68194V14.2442C9.67589 14.6616 9.97651 14.9997 10.3967 14.9997H13.2858C13.706 14.9997 14.0467 14.6616 14.0467 14.2439V7.53219C14.0467 7.53219 14.1911 7.65785 14.3692 7.81336C14.547 7.96857 14.9204 7.84412 15.2031 7.53492L15.4012 7.31855Z" fill="#A9ACB1" />
        </svg>
        <span className="icon_text">Discover</span></NavLink>
      <NavLink activeClassName="active" className="left_links" to='/library'>
        <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="nav_icon" fillRule="evenodd" clipRule="evenodd" d="M1.45453 6C1.05042 6 0.707047 6.14577 0.42417 6.43749C0.141425 6.72909 0 7.08323 0 7.5C0 7.91658 0.141425 8.27093 0.424276 8.56259C0.707127 8.8542 1.05058 9 1.45464 9C1.85862 9 2.20202 8.8542 2.48489 8.56259C2.76767 8.27096 2.90909 7.91661 2.90909 7.5C2.90909 7.08323 2.76767 6.72909 2.48481 6.43746C2.20202 6.14586 1.85859 6 1.45453 6Z" fill="#A9ACB1" />
          <path className="nav_icon" fillRule="evenodd" clipRule="evenodd" d="M1.45459 0C1.05046 0 0.707073 0.145853 0.424185 0.437477C0.141431 0.729182 0 1.08331 0 1.49999C0 1.91672 0.141351 2.27087 0.424185 2.56258C0.707047 2.8542 1.05051 3 1.45459 3C1.85858 3 2.20199 2.85417 2.48488 2.56258C2.76766 2.27087 2.90909 1.91669 2.90909 1.49999C2.90909 1.08331 2.76766 0.729182 2.48488 0.437477C2.20212 0.145853 1.85871 0 1.45459 0Z" fill="#A9ACB1" />
          <path className="nav_icon" fillRule="evenodd" clipRule="evenodd" d="M1.45459 12C1.05046 12 0.706967 12.1457 0.424185 12.4373C0.141431 12.7291 0 13.0833 0 13.4999C0 13.9168 0.141351 14.2708 0.424185 14.5626C0.707047 14.8542 1.05051 15 1.45459 15C1.85858 15 2.20199 14.8542 2.48488 14.5626C2.76766 14.2708 2.90909 13.9168 2.90909 13.4999C2.90909 13.0833 2.76766 12.7289 2.48488 12.4373C2.20212 12.1457 1.85871 12 1.45459 12Z" fill="#A9ACB1" />
          <path className="nav_icon" fillRule="evenodd" clipRule="evenodd" d="M19.2862 0.11116C19.2141 0.037149 19.129 0 19.0304 0H5.21222C5.11379 0 5.02854 0.0370259 4.95657 0.11116C4.88465 0.18554 4.84863 0.273261 4.84863 0.374815V2.62514C4.84863 2.72674 4.88465 2.81442 4.95657 2.88884C5.02858 2.96293 5.11383 3 5.21222 3H19.0304C19.129 3 19.2141 2.96306 19.2862 2.88884C19.3583 2.81446 19.3941 2.72674 19.3941 2.62514V0.374856C19.394 0.273302 19.3581 0.185417 19.2862 0.11116Z" fill="#A9ACB1" />
          <path className="nav_icon" fillRule="evenodd" clipRule="evenodd" d="M19.0304 6H5.21222C5.11379 6 5.02854 6.03694 4.95657 6.11132C4.88465 6.18549 4.84863 6.27341 4.84863 6.37495V8.62505C4.84863 8.72651 4.88465 8.81439 4.95657 8.8886C5.02858 8.96302 5.11383 9 5.21222 9H19.0304C19.129 9 19.2141 8.96306 19.2862 8.8886C19.3583 8.81439 19.3941 8.72651 19.3941 8.62505V6.37495C19.3941 6.27341 19.3581 6.18532 19.2862 6.11132C19.214 6.03711 19.129 6 19.0304 6Z" fill="#A9ACB1" />
          <path className="nav_icon" fillRule="evenodd" clipRule="evenodd" d="M19.0304 12H5.21222C5.11379 12 5.02854 12.0371 4.95657 12.1114C4.88465 12.1857 4.84863 12.2735 4.84863 12.3749V14.6251C4.84863 14.7268 4.88465 14.8145 4.95657 14.8889C5.02858 14.9631 5.11383 15 5.21222 15H19.0304C19.129 15 19.2141 14.9631 19.2862 14.8889C19.3583 14.8145 19.3941 14.7268 19.3941 14.6251V12.3749C19.3941 12.2735 19.3581 12.1854 19.2862 12.1114C19.214 12.0374 19.129 12 19.0304 12Z" fill="#A9ACB1" />
        </svg>
        <span className="icon_text">library</span></NavLink>
    </div>
    <div className="navigation_item">
      <NavLink activeClassName="none" className="logo_link" exact to='/'><img src={logo} alt="" /></NavLink>
    </div>
    <div className="navigation_item rignt_nav">
      <Input value={props.value} change={props.change} elementType="search" />
      <div>
        <div className="signup_nav" to="/signup">
          <img src={profile} alt="profile" />
          <span className="sign_up__text">Sign Up</span>
        </div>
      </div>
    </div>
  </div>
);

export default Navigation;