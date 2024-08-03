import "./Style.css";
import { Link } from "react-router-dom";
import ImageTeam from './pexels-shvetsa-5324897.jpg';
import ImageDescription from './pexels-yankrukov-7693152.jpg';
import { useState } from "react";
import validator from "validator";
import { Helmet } from "react-helmet";
 export default function About(){
      const [email, setEmail] = useState("");
    return (
        <div>
             <Helmet>
        <title>About | Dearer Store</title>
      </Helmet>
       <div id="About_Us">
         <h1>About Us!</h1> 
         <h5>Get To Know Us More And  
            Gain Your <br/>Trust In Us!</h5> 
       </div>
       <div id="Our_Team">
       <img src={ImageTeam}></img>
       <div>
         <h5>
         Welcome To Dearer, Your First
          Destination For The Finest  <br/> And Most Luxurious Types Of Modern 
          Clothing. Our <br/> Company Was Founded On The Foundations Of  <br/>
           Providing High-Quality Products That  
           Combine Elegance <br/>And Comfort While Ensuring That Our  
            Customers Diverse <br/>And Constantly  
            Evolving Needs Are Met.
            </h5> 
         <h5>
         At Dearer, We Keep Up With The Latest Global Fashion  <br/>
          Trends And Create Unique Designs That  
          Reflect Elegance<br/> And Distinction. Whether  
           You Are Looking For Formal Or <br/>Casual Clothing, We Have  
           A Diverse Collection That Suits All  <br/>
            Tastes And Suits All Occasions.
         </h5> 
         <h5>
         We Put Our Customers At The Heart Of Everything  <br/>We Do 
          And Strive To Provide A Smooth And  <br/>
          Enjoyable Shopping Experience Whether <br/>
           In Our Stores Or Online.         </h5> 
         <h5>
         We Carefully Select The Finest Materials To Ensure That <br/>
          Every Piece Of Clothing We Offer Reflects High Quality And Durability <br/>
           We Believe That Small Details Make A Big Difference.
              </h5> 
         <h5>
         We Believe In The Importance Of Preserving <br/>The Environment And Work 
          To Adopt Environmentally <br/>Friendly Manufacturing Practices 
          In Order To Contribute<br/> To Protecting 
           Our Planet For Future Generations.
              </h5> 
              
       </div>
       </div>
       <div id="Buy_now">
         <h1>Buy It Now!</h1>
         <h5>Buy Now Everything You Need 
          In The World <br/>Of Clothing!</h5> 
       </div>
              <div id="Image_DESCRIPTION">
       <img src={ImageDescription}></img>
       </div>
       <div id="Fag">
         <h1>Get To Know Us!</h1>  
         <h5>
        Get To Know Us More By Sending Your<br/> Email Now.</h5> 
       </div>
       <div id="Your_Email">
       <input placeholder="Your Email" id="InputEmail" type = "email" value = {email} onChange = {handleEmail} />
       <button id="Send" onClick={SendEmail}> send</button>
     </div>

     <div id="Fotter">
     <h5 href="saad">dearer</h5>
     <div>
     <h1>Menu.</h1>
     <ul>
      <li>
      <Link to="/Home"  id="QiukLink" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Home</Link>
      </li>
      <li>
      <Link to="/Contact" onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}>Contact US</Link>
      </li>
      <li>
      <Link to="/About" id="QiukLink" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>AboutUs</Link>
      </li>
      <li>
      <Link to="/Product" id="QiukLink" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Product</Link>
      </li>
     </ul>
     </div>
     <div>
     <h1>Quick Links.</h1>
     <ul>
      <li>
      <Link to="/Blog" onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}>Blog</Link>
      </li>
      <li>
        <a href="Dearer">Support
        </a>
      </li>
      <li>
        <a href="Dearer">Careers
</a>
      </li>
      <li>
        <a href="Dearer">Privacy Policy
        </a>
      </li>
     </ul>
     </div>
     <div id="Contact">
     <h1>Contact</h1>
     <ul>
      <li>
        <a href="Dearer">56 Hendford Rd, Warwickshire, BH10 5AU
        </a>
      </li>
      <li>
        <a href="Dearer">contact@info.com
        </a>
      </li>
      <li>
        <a href="Dearer">01202 511337
        </a>
      </li>
     </ul>
     </div>
     </div>
     <div id="FoTTER_Description">
     <h1>Copyright © 2024 Dearer Store | Powered by Dearer Store</h1>
     <h1 className="Name">Saad Anna 2024.</h1>
     </div>
     </div>
    )
   
 

    function handleEmail(event) {
     const EmailInput = document.getElementById("InputEmail")
        let new_Email = event.target.value;
        setEmail(new_Email);
        if (!validator.isEmail(new_Email)) {
        EmailInput.style.borderColor = "red";
        } else {
         EmailInput.style.borderColor = '#cbcfd2';
        }
    }
    function SendEmail(){
        const EmailInput = document.getElementById("InputEmail")
        if(EmailInput.value === ""){
           EmailInput.style.borderColor = "red";
        }
        else if(EmailInput.value.length <= 5 ){
         EmailInput.style.borderColor = "red"
         EmailInput.value = '';
        }
        else{
        EmailInput.value = "";
        EmailInput.style.borderColor = "green";
        }
    }
   
}

