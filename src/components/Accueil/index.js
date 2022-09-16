import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import Layout from '../Layout/index.js';
import homme from './homme.jpg';
import femme from './femme.jpg';
import homme2 from './homme2.jpg';
import $ from 'jquery';

const Home = () => {
  
    return (
  
  <div class="main_div"> 
    <Layout/>
    <div class="home">
      <form class="form_post">
        <input type="text" class="ajout_post" placeholder="Quoi de neuf docteur ?"></input>
        <div class="button">
          <input type="submit" class="submit_post"></input>
        </div>
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
        <img src={homme2} class="image_post" alt="homme2" ></img>
        <div class="text_post">
          <p class="p_post">Lorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknown</p>
        </div>
      </div>
    </div>
  </div>
    )
    }
  
  
  export default Home