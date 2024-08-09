import MYimage from "./pexels-ron-lach-8386643.jpg";
import ImageProductTWO from "./pexels-dom-j-7304-45982.jpg";
import ImageProductTHREE from "./pexels-nietjuh-934070.jpg";
import ImageProductFive from "./pexels-mnzoutfits-1598505.jpg";
import OpinionOne from "./women_face_one.png";
import OpinionTwo from "./women_face_two.png";
import OpinionThree from "./mane_face.png";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Style.css";
export default function Header() {
  return (
    <div>
      <Helmet>
        <title>Home | Dearer Store</title>
      </Helmet>
      <div id="HomePage">
        <div>
          <h1>
            Welcome To The Best <br /> Store In The World!
          </h1>
          <p>
            Welcome To Dearer The Right Place To Buy The Best And MostWonderful
            Clothes Shoes And Accessories Around The
            <br /> World With High Quality And Reasonable Prices.
          </p>

          <Link
            to="/Product"
            aria-label="Shop Now"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Shop Now
          </Link>
        </div>
        <img src={MYimage} />
      </div>
      <div id="OurProucts">
        <h1>Our Products</h1>
      </div>
      <div id="Our_Product">
        <div>
          <img src={ImageProductTWO} />
          <h1>Cotton Shirt.</h1>
          <span>$39.99</span>
          <Link
            to="/Product"
            id="QiukLink"
            aria-label="Shop Now"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Shop Now
          </Link>
        </div>
        <div>
          <img src={ImageProductTHREE} />
          <h1>Cold Suit.</h1>
          <span>$80.99</span>
          <Link
            to="/Product"
            id="QiukLink"
            aria-label="Shop Now"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Shop Now
          </Link>
        </div>
        <div>
          <img src={ImageProductFive} />
          <h1>men cap.</h1>
          <span>$20.99</span>
          <Link
            to="/Product"
            id="QiukLink"
            aria-label="Shop Now"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Shop Now
          </Link>
        </div>
      </div>
      <div id="ourFeatures">
        <h1>Our Features</h1>
        <p>We Have Many Advantages That Make Many People Prefer Us.</p>
      </div>
      <div id="Features">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="sVGiCONTwo"
            viewBox="0 0 24 24"
          >
            <path d="M15.91 13.34l2.636-4.026-.454-.406-3.673 3.099c-.675-.138-1.402.068-1.894.618-.736.823-.665 2.088.159 2.824.824.736 2.088.665 2.824-.159.492-.55.615-1.295.402-1.95zm-3.91-10.646v-2.694h4v2.694c-1.439-.243-2.592-.238-4 0zm8.851 2.064l1.407-1.407 1.414 1.414-1.321 1.321c-.462-.484-.964-.927-1.5-1.328zm-18.851 4.242h8v2h-8v-2zm-2 4h8v2h-8v-2zm3 4h7v2h-7v-2zm21-3c0 5.523-4.477 10-10 10-2.79 0-5.3-1.155-7.111-3h3.28c1.138.631 2.439 1 3.831 1 4.411 0 8-3.589 8-8s-3.589-8-8-8c-1.392 0-2.693.369-3.831 1h-3.28c1.811-1.845 4.321-3 7.111-3 5.523 0 10 4.477 10 10z" />
          </svg>
          <h1>The Speed.</h1>
          <p>
            We Have The Highest Speed In Delivering The <br /> Order All Over
            The World.
          </p>
        </div>
        <div>
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            className="sVGiCONTwo"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m8 16h-5v4c0 .621.52 1 1 1h4zm6.6 5v-5h-5.2v5zm6.4-5h-5v5h4c.478 0 1-.379 1-1zm0-1.4v-5.2h-5v5.2zm-18-5.2v5.2h5v-5.2zm11.6 0h-5.2v5.2h5.2zm1.4-6.4v5h5v-4c0-.478-.379-1-1-1zm-8 5v-5h-4c-.62 0-1 .519-1 1v4zm6.6-5h-5.2v5h5.2z"
              fill-rule="nonzero"
            />
          </svg>
          <h1>Arrangement</h1>
          <p>
            All Our Stores Around The World Have An Amazing <br /> And Wonderful
            Arrangement.
          </p>
        </div>
        <div>
          <svg
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            className="sVGiCONTwo"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m11.998 2.001c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm-4.496 6.028-.002-.825c0-.414-.336-.75-.75-.75s-.75.336-.75.75v3.048c0 .414.336.75.75.75h3.022c.414 0 .75-.336.75-.75s-.336-.756-.75-.756h-1.512c.808-1.205 2.182-1.998 3.74-1.998 2.483 0 4.5 2.016 4.5 4.5 0 2.483-2.017 4.5-4.5 4.5-1.956 0-3.623-1.251-4.242-2.997-.106-.299-.389-.499-.707-.499-.518 0-.88.513-.707 1.001.825 2.327 3.048 3.995 5.656 3.995 3.312 0 6-2.689 6-6 0-3.312-2.688-6-6-6-1.79 0-3.399.786-4.498 2.031z"
              fill-rule="nonzero"
            />
          </svg>
          <h1>Replay</h1>
          <p>
            In Our Store You Can Return Any Order You Want If <br />
            There Is Something Wrong With It
          </p>
        </div>
      </div>
      <div id="Opinions">
        <h1>What do customers say about Dearer?</h1>
      </div>
      <div id="People_Opinions">
        <div>
          <img src={OpinionOne} />
          <h1>Maria Olive.</h1>
          <div className="Star">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
            </svg>
          </div>
          <p>
            "I loved my experience with Dearer! The quality of the
            <br />
            clothes is excellent and the designs are unique
            <br /> Shipping was fast and the customer service
            <br /> was very helpful. I will definitely <br />
            buy from them again."
          </p>
        </div>
        <div>
          <img src={OpinionTwo} />
          <h1>Sosi Lola.</h1>
          <div className="Star">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
            </svg>
          </div>
          <p>
            "The clothes were great but I had a little issue with <br />
            the size of the pants. Fortunately, the exchange <br />
            process was quick and easy. Overall <br />
            I am very satisfied <br /> with the site."
          </p>
        </div>
        <div>
          <img src={OpinionThree} />
          <h1>Jack Alex.</h1>
          <div className="Star">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path d="M12 .288l2.833 8.718h9.167l-7.417 5.389 2.833 8.718-7.416-5.388-7.417 5.388 2.833-8.718-7.416-5.389h9.167z" />
            </svg>
          </div>

          <p>
            "The designs were great but not all sizes were available <br />
            The purchasing process was smooth but I wish the <br />
            size variety was improved. Great place <br />
            for trendy clothes. Loved the quality <br />
            and fast service."
          </p>
        </div>
      </div>
      <div id="Fotter">
        <h5>Dearer</h5>
        <div>
          <h1>Menu.</h1>
          <ul>
            <li>
              <Link
                to="/Home"
                id="QiukLink"
                aria-label="Home Page Link"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                aria-label="Contact Page Link"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Contact US
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                id="QiukLink"
                aria-label="About Page Link"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                AboutUs
              </Link>
            </li>
            <li>
              <Link
                to="/Product"
                id="QiukLink"
                aria-label="¨Product Page Link"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Product
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h1>Quick Links.</h1>
          <ul>
            <li>
              <Link
                to="/Blog"
                aria-label="Blog Page Link"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Blog
              </Link>
            </li>
            <li>
              <a href="##" aria-label="Support Page">Support</a>
            </li>
            <li>
              <a href="##" aria-label="Careers Page">Careers</a>
            </li>
            <li>
              <a href="##" aria-label="Privacy Policy">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div id="Contact">
        <ul>
            <li>
              <h1

              >
                Contact
              </h1>
            </li>
            <li>
              <a href="##" aria-label="Support Page">Morooco, Kenitra 2024</a>
            </li>
            <li>
              <a href="##" aria-label="Careers Page">Dearer@gmail.com</a>
            </li>
            <li>
              <a href="##" aria-label="Privacy Policy">0122885898</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="FOoter">
        <h1>Copyright © 2024 Dearer Store | Powered by Dearer Store</h1>
        <h1 className="Name">Saad Anna 2024.</h1>
      </div>
    </div>
  );
}
