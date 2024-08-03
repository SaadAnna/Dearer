import { Link } from "react-router-dom";
import "./Style.css";

export default function Nav(){
return ( 
    <div>
      <header>
      <Link to="/Home" id="logo">dearer</Link> 
           <input type="checkbox" id="nav_check" hidden />
           <input type="checkbox" id="nav_check" hidden />
           <nav id="Nav">
               <ul>
               <label for="nav_check" id="hamburger" onClick={HmaburgerClose} >
               <div class="hamburger-ligne-one"></div>
               <div class="hamburger-ligne-two"></div>
           </label>
                   <li>
                   <Link to="/Home" id="NavLink" onClick={LinkClcik}>Home</Link> 
                   </li>
                   <li>
                   <Link to="/Product" id="NavLink" onClick={LinkClcik}>Products</Link> 
                   </li>
                   <li>
                   <Link to="/Contact" id="NavLink" onClick={LinkClcik}>Contact Us</Link> 
                   </li>
                   <li>
                   <Link to="/About" id="NavLink" onClick={LinkClcik}>About Us</Link> 
                   </li>
                   <li>
                   <Link to="/Blog" id="NavLink" onClick={LinkClcik}>Blog</Link>
                   </li>

               </ul>
           </nav>
           <label for="nav_check" class="hamburger" onClick={HmaburgerOpen} >
               <div class="hamburger-ligne"></div>
               <div class="hamburger-ligne"></div>
               <div class="hamburger-ligne"></div>
           </label>
       </header>
    </div>
)
function LinkClcik(){
    const NavLink  = document.getElementById("Nav");
     NavLink.style.position = "absoulute";
     NavLink.style.left = "-100%";
}
function HmaburgerOpen(){
    const NavLink  = document.getElementById("Nav");
    NavLink.style.position = "absoulute";
    NavLink.style.left = "0";
}
function HmaburgerClose(){
    const NavLink  = document.getElementById("Nav");
    NavLink.style.position = "absoulute";
    NavLink.style.left = "-100%";
}
}