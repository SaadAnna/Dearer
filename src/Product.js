import "./Style.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import IMageProducTS from './pexels-athena-2043590.jpg'
import MYIMAGE from './pexels-mr-kafui-123879211-15208984.jpg'
import IMAGEproductsTWO from './pexels-godisable-jacob-226636-914668.jpg'
import  IMAGEpRODUCTSTHRE from './pexels-wesleydavi-3622614.jpg'
export default function Product(){
    return ( 
    <div>
       <Helmet>
        <title>Proucts | Dearer Store</title>
      </Helmet>
     <div id="product_Services">
     <h5>Products</h5>
     <h1>
     Enjoy The Best And <br/>  Best Clothes Around <br/>  The World.
     </h1>
     </div>
     <div id="image_DESCription">
     <img src={MYIMAGE} alt="My Image" />
</div>
<div class="FRIST_card">
      <div>
  <h1>Long Coat.</h1>
  <p className="Description">
  A Long Pink Coat For <br/>
   Women With A Wonderful <br/>
    And Fairy-Tale Design  <br/>
    For Important Occasions
     <br/> And Parties
  </p>
  <p className="price">$539.99</p>

  <a href="Dearer">add to cart</a>
  </div>
   <img src={IMageProducTS}></img>
</div>
<div class="SECOND_card">
      <img src={IMAGEproductsTWO}></img>
      <div>
  <h1>Elegant Suit.</h1>
  <p className="Description">An Elegant Dark Blue Suit For <br/>
   Women That Can Be Worn <br/>
    On Important Occasions <br/>
     Parties And Also <br/>
      For Going Out.</p>
  <p className="price">$1259.98</p>

  <a href="Dearer">add to cart</a>
  </div>
</div>
<div class="THIRD_card">
      
      <div>
  <h1>Sport Wear</h1> 
  <p className="Description">
  Men's Yellow Sportswear is <br/>
   Suitable For Cold Weather <br/>
    And Summer, And Can <br/>
     Also Be Worn Outside.
  </p>
  <p className="price">$189.98</p>

  <a href="Dearer">add to cart</a>
  </div>
   <img src={IMAGEpRODUCTSTHRE}></img>
</div>
<div id="PEOPLE_questionS">
     <h5>Why US?</h5>
     <h1>
     We Enjoy Unique Methods Of  <br/>
      Providing Buying And Selling Services  <br/>
       Credibility And High Confidence  <br/>
        In Providing The Best And Best <br/>
         Clothes With High Quality To  <br/>
          All Customers From  <br/>
           All Over The World.
     </h1>
     <Link to="/Contact">Contact US</Link>     </div>
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
}
