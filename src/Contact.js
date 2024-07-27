import "./Style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Contact(){

  const[FormInput, SetFormInput] = useState ({ fristName:"", lastName: "", email: "", city: "",
  Message: "",}); 
return (
    <div>
     <div id="Contact_Tiltle">  
 <h1>
   Contact Us.
 </h1>
 <h5> <br/>
 Contact us If you Have Any Problem 
  With Ordering Any Product <br/>
   Or Not Having It With Us! </h5>
 </div>
 <div id="Contact_SEction">

  <div id="OUR_contact">
 <h1>
 Ask For Help Now.
  </h1>
 <h5><br/>


We Understand That Emergency Situations Can 
 Happen At Any Moment<br/> Which Is Why We
  Are Here To Support You And Provide 
   The Help You Need. <br/> Our Specialized 
    Team Is Always Ready To Answer Your
     Inquiries And Provide <br/> You With 
     Suitable Solutions Quickly And Efficiently.

We Are Committed <br/> To ProvidingYou With 
 The Best Possible Service, And Always 
 Strive<br/> To Ensure Your Comfort And Satisfaction 
  You Can Count On Us <br/>To Provide Support 
   At All Times, Whether You Have A Small <br/>
    Problem Or Need Help With <br/>
     A More Complex Issue. <br/>Tank You!
  </h5>
 </div> 
 <div className="FORM_contact">

 <h1>
  Send Your Messsage Now!
 </h1>
 <label>
Frist Name
 </label>
 <input type="text" placeholder="Frist Name" id="FRISTname"
 value={FormInput.fristName} onChange={(Event) => {
  SetFormInput({...FormInput, fristName: Event.target.value})
 }}/> 
 <label>  
Last Name
 </label> 
 <input type="text" placeholder="Last Name" id="LastName"
 value={FormInput.lastName} onChange={(Event) => {
     SetFormInput({...FormInput, lastName: Event.target.value})
    } }/>
 <label>
City
 </label>
 <input type="text" placeholder="City" id="City"
 value={FormInput.city} onChange={(Event) => {
     SetFormInput({...FormInput, city: Event.target.value})
    } }/>
 <label>
Email
 </label>
 <input type="email" placeholder="Email" id="Email"
 value={FormInput.email} onChange={(Event) => {
     SetFormInput({...FormInput, email: Event.target.value})
    } }/>
 <label>
Message
 </label>
 <textarea placeholder="Message" id="Message"
 value={FormInput.Message} onChange={(Event) => {
     SetFormInput({...FormInput, Message: Event.target.value})
    } }>
  
 </textarea>
 <button id="SENDmessage"  onClick={SENdMessage}>
Send
 </button>

  </div>
 </div>
 <div id="Our_Location">  
 <h1>
   Our Location.
 </h1>
 <h5> <br/>
 You Can Now Buy Through Our Store <br/>
  At Great Prices And High Quality!
</h5>

 </div>
 <div id="Location">  
 <iframe className="LOCATION" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317716.6065149795!2d-0.4312499428033268!3d51.528607004133846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2ses!4v1721931356564!5m2!1sen!2ses" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

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
function SENdMessage(){
  const NAME = document.getElementById("FRISTname");
  const LastNAME = document.getElementById("LastName");
  const City = document.getElementById("City");
  const Email = document.getElementById("Email");
  const Message = document.getElementById("Message");
  const SendMessage = document.getElementById("SENDmessage");
  if(NAME.value === ''){
    SendMessage.innerHTML = `TRY AGAIN`;
    SendMessage.style.backgroundColor = '#830000';
     setTimeout(function(){
      window.location.reload();
   }, 1000);

  }else if(LastNAME.value === ''){
    SendMessage.innerHTML = `TRY AGAIN`;
    SendMessage.style.backgroundColor = '#830000';
     setTimeout(function(){
      window.location.reload();
   }, 1000);

  }else if(City.value === ''){
    SendMessage.innerHTML = `TRY AGAIN`;
    SendMessage.style.backgroundColor = '#830000';
     setTimeout(function(){
      window.location.reload();
   }, 1000);

  }else if(Email.value === ''){
    SendMessage.innerHTML = `TRY AGAIN`;
    SendMessage.style.backgroundColor = '#830000';
     setTimeout(function(){
      window.location.reload();
   }, 1000);
  
  }else if(Message.value === ''){
    SendMessage.innerHTML = `TRY AGAIN`;
    SendMessage.style.backgroundColor = '#830000';
     setTimeout(function(){
      window.location.reload();
   }, 1000);
  }
  else{
    SendMessage.style.backgroundColor = "#005719 "
    NAME.value = '';
    LastNAME.value = '';
    City.value = '';
    Email.value = '';
    Message.value = '';
    SendMessage.innerHTML = `send Successfully!`
    setTimeout(function(){
      window.location.reload();
   }, 1000);  }
}
}