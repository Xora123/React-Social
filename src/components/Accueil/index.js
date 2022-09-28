import React, { useEffect, useState } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import Layout from '../Layout/index.js';
import homme from './homme.jpg';
import femme from './femme.jpg';
import homme2 from './homme2.jpg';
import $, { post } from 'jquery';
import axios from "axios";

const Home = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      await axios
        .get('https://127.0.0.1:8000/api/posts')
        .then((data) => {
          setPosts(data.data['hydra:member'])
        })
        .catch((e) => {
          setLoading(false);
          console.log(e);
        });
    }
    getData();
  }, []);
  
  return (
  
  <div className="main_div"> 
    <Layout/>
    <div className="home">
      <form className="form_post">
        <input type="text" className="ajout_post" placeholder="Quoi de neuf docteur ?"></input>
        <div className="button">
          <input type="submit" className="submit_post"></input>
        </div>
      </form>
      {posts.map(post =>  <div className="post">
    <img src={homme} className="image_post" alt="homme" ></img>
    <div className="text_post">
       <p className="p_post"> {post.content} </p>
     </div>
   </div> )}
     
      <div className="post">
        <img src={femme} className="image_post" alt="femme" ></img>
        <div className="text_post">
          <p className="p_post2">Lorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknown</p>
        </div>
      </div>
      <div className="post">
        <img src={homme2} className="image_post" alt="homme2" ></img>
        <div className="text_post">
          <p className="p_post">Lorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknownLorem Ipsum is e 1500s, when an unknown</p>
        </div>
      </div>
    </div>
  </div>
    )
    }
  
  export default Home