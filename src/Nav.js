
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
                       <a href="/Header">Home</a>
                   </li>
                   <li>
                       <a href="saad">Poduct</a>
                   </li>
                   <li>
                       <a href="saad" class="">Contact Us</a>
                   </li>
                   <li>
                       <a href="about-page.html">About Us</a>
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