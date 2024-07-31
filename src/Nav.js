import { Link } from "react-router-dom";
import "./Style.css";

export default function Nav(){
return ( 
    <div>
      <header>
      <Link to="/Home" id="logo">dearer</Link> 
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
                   <Link to="/Blog">Blog</Link>
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