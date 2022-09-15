import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import Layout from '../Layout/index.js';
import homme from './homme.png';
import femme from './femme.png';
import femme2 from './femme2.png';
import $ from 'jquery';

const Home = () => {
  
    return (
  
  <div class="main_div"> 
    <Layout/>
    <div class="home">
      <form class="form_post">
        <input type="text" class="ajout_post" placeholder="Quoi de neuf docteur ?"></input>
        <input type="submit" class="submit_post"></input>
      </form>
      <div class="post">
        <img src={homme} class="image_post" alt="homme" ></img>
        <div class="text_post">
          <p class="p_post">Lorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknown</p>
        </div>
      </div>
      <div class="post">
        <img src={femme} class="image_post" alt="femme" ></img>
        <div class="text_post">
          <p class="p_post2">Lorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknown</p>
        </div>
      </div>
      <div class="post">
        <img src={femme2} class="image_post" alt="femme2" ></img>
        <div class="text_post">
          <p class="p_post">Lorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknown</p>
        </div>
      </div>
    </div>
  </div>
    )
    }
  
  
  export default Home