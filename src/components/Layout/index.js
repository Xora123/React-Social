import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import logo from './logo.png';
import profil_femme from './profil_femme.png';
import message from './crayon.png';
import accueil from './home_layout.png';
import deconnection from './deconnection.png';
import contact from './ajout_user.png';
import $ from 'jquery';


const Layout = () => {
  
    return (
        <div class="layout"> 
            <div class> 
              <img src={logo} alt="logo" class="logo"></img>
            </div>
            <form>
                <div class="form">
                <input type="text" placeholder="Recherche..." class="input"></input>
                </div>
                <div class="form">
                <input type="submit" class="input submit"></input>
              </div>
          </form>
          <div class="menu">
            <div class="sub_menu profil"> 
              <img src={profil_femme} alt="femme" class="icon femme"></img>
              <a class="link" href="#">Profil</a>
            </div>
            <div class="sub_menu accueil"> 
              <img src={accueil} alt="femme" class="icon"></img>
              <a class="link" href="#">Accueil</a>
            </div>
            <div class="sub_menu message"> 
              <img src={message} alt="message" class="icon"></img>
              <a class="link" href="#">Message</a>
            </div>
            <div class="sub_menu contact"> 
              <img src={contact} alt="contact" class="icon"></img>
              <a class="link" href="#">Contacts</a>
            </div>
            <div class="sub_menu deconnection"> 
              <img src={deconnection} alt="deconnection" class="icon"></img>
              <a class="link" href="#">Deconnection</a>
            </div>
          </div>
        </div>
    )
    }
  
  
  export default Layout