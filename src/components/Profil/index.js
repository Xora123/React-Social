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
<>
    <div className="main">
        <Layout />

        <div className="User">
            <div className="user_profil">
                <img src={femme} className="femme_profil" alt="Photo de profil"></img>
                <h1 className="name">Michelle</h1>
            </div>
            <div className="users_posts">
                <div className="user_post">
                    <p className="user-text">Lorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknown</p>
                </div>
                <div className="user_post2">
                    <p className="user-text2">Lorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknown</p>
                </div>
                <div className="user_post3">
                    <p className="user-text3">Lorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknown</p>
            </div>
        </div>
    </div>
  
    </div>
  </>
    )
    }

   
  export default Profil