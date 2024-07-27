import "./Style.css";
import { Link } from "react-router-dom";
import ImageTeam from './pexels-shvetsa-5324897.jpg';
import ImageDescription from './pexels-yankrukov-7693152.jpg';
 export default function About(){
    return (
        <div>
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
              <Link to="/Contact">Contact US</Link>
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
         <h1>People's questions?</h1> 
         <h5>
         Frequently Asked Questions About Us <br/>And Our Service.</h5> 
       </div>
       <div id="Questions">

       </div>

       <div id="Fotter">
     <h5 href="saad">dearer</h5>
     <div>
     <h1>Menu.</h1>
     <ul>
      <li>
      <Link to="/Home">Home</Link>
      </li>
      <li>
      <Link to="/Contact">Contact US</Link>
      </li>
      <li>
      <Link to="/About">AboutUs</Link>
      </li>
      <li>
      <Link to="/Product">Product</Link>
      </li>
     </ul>
     </div>
     <div>
     <h1>Quick Links.</h1>
     <ul>
      <li>
      <Link to="/Blog">Blog</Link>
      </li>
      <li>
        <a href="##">Support
        </a>
      </li>
      <li>
        <a href="##">Careers
</a>
      </li>
      <li>
        <a href="##">Privacy Policy
        </a>
      </li>
     </ul>
     </div>
     <div id="Contact">
     <h1>Contact</h1>
     <ul>
      <li>
        <a href="##">56 Hendford Rd, Warwickshire, BH10 5AU
        </a>
      </li>
      <li>
        <a href="##">contact@info.com
        </a>
      </li>
      <li>
        <a href="##">01202 511337
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
    
}
