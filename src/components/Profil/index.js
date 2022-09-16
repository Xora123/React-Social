import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import Layout from '../Layout/index.js';
import femme from './femme.jpg';

import $ from 'jquery';

const Profil = () => {
  
    return (

    <div class="main">
        <Layout />

    <div class="User">
    <div class="user_profil">
        <img src={femme} class="femme_profil" alt="Photo de profil"></img>
        <h1 class="name">Michelle</h1>
    </div>
    <div class="users_posts">
    <div class="user_post">
        <p class="user-text">Lorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknown</p>
    </div>
    <div class="user_post2">
        <p class="user-text2">Lorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknown</p>
    </div>
    <div class="user_post3">
        <p class="user-text3">Lorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknown</p>
    </div>
    </div>
    </div>
  
    </div>
=======
        <div clas="main_div"> 
    <p>KIKOU</p>
  </div>
    )
    }
  
  
  export default Profil