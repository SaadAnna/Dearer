import MYimage from "./pexels-kseniachernaya-3965545.jpg"
import IMAGE from "./1.png"
import myImage from "./2.png"
import Image from "./3.png"
import IMageProduct from "./pexels-frendsmans-1926769.jpg"
import "./Style.css";
 export default function Header(){
   return (
     <div>
<div id="Header">
 <div>  
 <h1>
    welcome!
 </h1>
 <h5>
 Buy Everything You Need <br/>  In The World Of Clothing <br/>  From One Place.
 </h5>
 <a href="saad">
   Shop
 </a>
 </div>

 
</div>
<div id="Image">
  
<img src={MYimage} alt="My Image" />
</div>
     <div id="Services">
     <div>
     <h1>
     WHAT WE DO
     </h1>
     <h5>
     We Are A Brand Of Casual <br/>  Clothing And Footwear 
      With A Wonderful <br/>And Distinctive Design   
       We Sell Clothes <br/>And We Also Print Your   
        Design On  <br/> Any Type Of 
         Clothing You Choose <br/>
Contact Us For More.
     </h5>
     <a href="saad">
       shop
     </a>
     </div>
    </div>
      <div id="Our_services">
      <div className="Frist_Services">
      <img className="Image" src={IMAGE} alt="My Image" />
      <h1>Good Cmmunication.</h1>
      <h5>
      Lorem ipsum dolor sit amet, consectetur <br/>
       adipiscing elit. Donec at cursus nunc <br/>
       varius dapibus elit Nullam sem velit, efficitur <br/>
        id ullamcorper eu, dignissim a <br/>
         lacus. Sed fermentum.
      </h5>
      </div>
      <div className="Frist_Services">
      <img className="Image" src={myImage} alt="My Image" />
      <h1>Advertisement.

      </h1>
      <h5>
      Lorem ipsum dolor sit amet, consectetur <br/>
       adipiscing elit. Donec at cursus nunc <br/>
       varius dapibus elit Nullam sem velit, efficitur <br/>
        id ullamcorper eu, dignissim a <br/>
         lacus. Sed fermentum.
      </h5>
      </div>
      <div className="Frist_Services">
      <img className="Image" src={Image} alt="My Image" />
      <h1>Good Surveillance.</h1>
      <h5>
      Lorem ipsum dolor sit amet, consectetur <br/>
       adipiscing elit. Donec at cursus nunc <br/>
       varius dapibus elit Nullam sem velit, efficitur <br/>
        id ullamcorper eu, dignissim a <br/>
         lacus. Sed fermentum.
      </h5>
      </div>
      </div>
      <div id="Product">
     <div>
     <h1>
     our products
     </h1>
     <h5>
     Some of our famous <br/>
      and best-selling 
       products locally and <br/>
        internationally.
     </h5>
     </div>
    </div> 
    <div id="Our_Product">
      <div class="card">
      <div>
  <h1>White Chemise.</h1>
  <p className="Description">A White Shirt For <br/>
   Women From Adidas <br/>
   Elegant And Distinctive<br/>  For Important 
    Occasions <br/>As Well As For Outings 
    <br/> And Family Gatherings.</p>
  <p className="price">$129.99</p>

  <p><button>Add To Cart</button></p>
  </div>
   <img src={IMageProduct}></img>
</div>
    </div>
     </div>
   
   )



}