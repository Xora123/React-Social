import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import Logo from './logo.png';
import profil_femme from './profil_femme.jpg';
import message from './crayon.png';
import accueil from './home_layout.png';
import deconnection from './deconnection.png';
import contact from './ajout_user.png';
import $ from 'jquery';


const Layout = () => {
  
    return (
        <div className="layout"> 
            <div> 
              <img src={Logo} alt="logo" className="logo"></img>
            </div>
            <form>
                <div className="form">
                <input type="text" placeholder="Recherche..." className="input"></input>
                </div>
                <div className="form">
                <input type="submit" className="input submit"></input>
              </div>
          </form>
          <div className="menu">
            <div className="sub_menu profil"> 
              <img src={profil_femme} alt="femme" className="icon femme"></img>
              <a className="link" href="#">Profil</a>
            </div>
            <div className="sub_menu accueil"> 
              <img src={accueil} alt="femme" className="icon"></img>
              <a className="link" href="#">Accueil</a>
            </div>
            <div className="sub_menu message"> 
              <img src={message} alt="message" className="icon"></img>
              <a className="link" href="#">Message</a>
            </div>
            <div className="sub_menu contact"> 
              <img src={contact} alt="contact" className="icon"></img>
              <a className="link" href="#">Contacts</a>
            </div>
            <div className="sub_menu deconnection"> 
              <img src={deconnection} alt="deconnection" className="icon"></img>
              <a className="link" href="#">Deconnection</a>
            </div>
          </div>
        </div>
    )
    }
  
  
  export default Layout