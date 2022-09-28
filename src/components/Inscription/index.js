import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import $ from 'jquery';

class Home extends React.Component {
  componentDidMount(){
   //animation code
    $(document).ready(function(){
        $('.login-info-box').fadeOut();
        $('.login-show').addClass('show-log-panel');
    
    
    
    $('input[type="radio"]').on('change',function() {
       
    
        if($('#log-reg-show').is(':checked')) {
            $('.register-info-box').fadeIn();
            $('.login-info-box').fadeOut();
            
            $('.white-panel').removeClass('right-log');
            
            $('.login-show').addClass('show-log-panel');
            $('.register-show').removeClass('show-log-panel');
        }
        if($('#log-login-show').is(':checked')) {
            $('.register-info-box').fadeOut(); 
            $('.login-info-box').fadeIn();
            
            $('.white-panel').addClass('right-log');
            $('.register-show').addClass('show-log-panel');
            $('.login-show').removeClass('show-log-panel');
            
        }
    });
});
  }
 
  render() {
   
    return (
     
       
       <div className="login-reg-panel">
            <div className="login-info-box">
                <h2>Vous avez déja un compte ?</h2>
                <p>Veuillez cliquer sur le bouton se connecter</p>
                <label id="label-register" for="log-reg-show">Se Connecter</label>
                <input type="radio" name="active-log-panel" id="log-reg-show" value="log-reg-show" />
            </div>
                        
            <div className="register-info-box">
                <h2>Vous n'avez pas de compte ?</h2>
                <p>LVeuillez cliquer sur le bouton s'inscrire</p>
                <label id="label-login" for="log-login-show">S'inscrire</label>
                <input type="radio" name="active-log-panel" value="log-login-show" id="log-login-show" />
            </div>
                        
            <div className="white-panel">
                <div className="login-show">
                <h2>Connexion</h2>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="button" value="Connexion" />
                
                </div>
                <div className="register-show">
                <h2>S'inscrire</h2>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <input type="button" value="S'inscrire" />
                </div>
            </div>
            </div>
)
};
}
export default Home;