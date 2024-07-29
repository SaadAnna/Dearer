import { Link } from "react-router-dom";
import "./Style.css";

export default function Nav(){
return ( 
    <div>
      <header>
        <a href="saad" id="logo">dearer</a>
           <input type="checkbox" id="nav_check" hidden />
           <nav>
               <ul>
                   <li>
                   <Link to="/Home">Home</Link> 
                   </li>
                   <li>
                   <Link to="/Product">Products</Link> 
                   </li>
                   <li>
                   <Link to="/Contact">Contact Us</Link> 
                   </li>
                   <li>
                   <Link to="/About">About Us</Link> 
                   </li>
                   <li>
                       <a href="about-page.html">Blog</a>
                   </li>

               </ul>
           </nav>
           <label for="nav_check" class="hamburger">
               <div class="hamburger-ligne"></div>
               <div class="hamburger-ligne"></div>
               <div class="hamburger-ligne"></div>
           </label>
       </header>
    </div>
)

}