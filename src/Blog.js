import { Helmet } from "react-helmet";
import BlogImage from './pexels-pixabay-458381.jpg';
import { Link } from "react-router-dom";
import "./Style.css"
export default function Blog(){
   return (
    <div>
        <Helmet>
        <title>Blog | Dearer Store</title>
      </Helmet>
      <div id="Blog_Section">

    <h1>
    Buy Now From The 
     Best <br/>Clothing Store In 
      The World!
        </h1>
      
        <p>
        The Best Clothing Store In 
         The World<br/> With High Certificates 
          In The Field
        </p>
          <div className="BuutOn">
        <a href="sa"  className="LEarn">Learn More</a  >
      </div>
      </div>
          <div id="dearer_Fag">
    <h1>
    Are You Looking For The 
     Best<br/> Clothing Design?
    </h1>
    <span>
    App 17, 2017
    </span>
    </div>
      <div id="ImagaDescription">
      <img src={BlogImage} alt="My Image" />
      </div>
      <div id="Blog">
      <h1>
      Description.
    </h1>
      <p>
      Welcome To DEARER
       Your Premier Destination For High-Quality 
       Carefully Curated<br/> Products. At DEARER, We Believe In Providing Our 
        Customers With The Best<br/> Shopping Experience, Offering A Diverse Range Of
         Items That Cater<br/> To Your Needs And Desires.
    </p>
    <p>
    <br/>
     From Fashion And Electronics To Home Goods And Beauty Products, DEARER<br/> Offers 
      A Wide Variety Of Items That Ensure You Find Exactly <br/>
       What You're Looking For.
    </p>
    <p>
     Every Product On DEARER Is Handpicked To Meet The Highest Standards  <br/>
     Of Quality And Reliability. We Partner With Trusted Brands And <br/>
      Suppliers To Bring You Only The Best.    </p>
    <p>
    Our Intuitive And Easy-To-Navigate Website Design Ensures That Your Shopping<br/> Experience 
     Is Seamless And Enjoyable. With Detailed Product Descriptions, <br/>High-Quality Images 
      And Customer Reviews, You Can <br/>
       Shop With Confidence.</p>
    <p>
    Our Dedicated Customer Support Team Is Always Ready To Assist You. Whether You <br/>
     Have Questions About Products, Orders, Or Need Help With Returns <br/>
      We're Here To Provide  <br/>
      The Support You Need.</p>
      </div>
      <div id="Sent_MEssage">
      <h1>If You Have Any Questions<br/>
      Sent Your Meassage Now. </h1>
      </div>
      <div id="Your_MEssage">
      <input type="text" placeholder="Your Message" required id="MeassageInput" onKeyUp={CheckMessage}/>
      <button id="ButtonSend" onClick={SendMESSAge}>Send</button>
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
   function SendMESSAge(){
   const MeassageInputValue = document.getElementById("MeassageInput");
   if(MeassageInputValue.value === ""){
    MeassageInputValue.style.borderColor = "red";
   }
   else{
    MeassageInputValue.value = "";
    MeassageInputValue.style.borderColor = "#cbcfd2";
   }
   }
   function CheckMessage(){
    const MeassageInputValue = document.getElementById("MeassageInput");
   MeassageInputValue.style.borderColor = 'green';
   }
}
