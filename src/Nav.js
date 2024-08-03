import { Link } from "react-router-dom";
import "./Style.css";

export default function Nav(){
return ( 
    <div>
      <header>
      <Link to="/Home" id="logo">dearer</Link> 
           <input type="checkbox" id="nav_check" hidden />
           <nav id="Nav">
               <ul>
               <div id="Close">               <svg clip-rule="evenodd" for="nav_check"   id="hamburger" onClick={HmaburgerClose} fill-rule="evenodd" className="HamburgerClose" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"/></svg>
               </div>
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
               <div class="line-two"></div>
               <div class="hamburger-ligne"></div>
               <div class="line-one"></div>
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