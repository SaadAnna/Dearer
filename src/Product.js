import "./Style.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import IMageProduct from "./pexels-micaasato-1082528.jpg";
import ImageProductTWO from "./pexels-dom-j-7304-45982.jpg";
import ImageProductTHREE from "./pexels-nietjuh-934070.jpg";
import ImageProductFour from "./pexels-marina-podrez-3269296-11671964.jpg";
import ImageProductFive from "./pexels-anna-nekrashevich-8532616.jpg";
import ImageProductSIX from "./blue-2566082_640.jpg";
import ImageProductSEVEN from "./pexels-solliefoto-298863.jpg";
import ImageProductHeight from "./pexels-mnzoutfits-1598505.jpg";
import ImageProductNINE from "./pexels-mstudio-360817-1240892.jpg";
import ImageProductTen from "./cap-1137677_640.jpg";
import ImageProductEleven from "./cap-7278216_640.jpg";
import ImageProductTwelve from "./hat-1415776_640.jpg";
export default function Product() {
  return (
    <div>
      <Helmet>
        <title>Proucts | Dearer Store</title>
      </Helmet>
      <div id="product_Services">
        <h5> Our Products</h5>
        <h1>
          Enjoy The Best And Best Clothes Around <br /> The World.
        </h1>
      </div>
      <div id="Our_Product">
        <div>
          <img src={ImageProductTWO} />
          <h1>Cotton Shirt.</h1>
          <span>$39.99</span>
          <Link
            to="/ProductOne"
            id="QiukLink"
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
            to="/ProductTwo"
            id="QiukLink"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Shop Now
          </Link>
        </div>
        <div>
          <img src={IMageProduct} id="JeansImage" />
          <h1>Long jeans.</h1>
          <span>$51.99</span>
          <br />

          <Link
            to="/ProductThree"
            id="JeansShop"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Shop Now
          </Link>
        </div>
      </div>
      <div id="Our_Product">
        <div>
          <img src={ImageProductFour} />
          <h1>White T-shirt.</h1>
          <span>$20.99</span>

          <Link
            to="/ProductFour"
            id="QiukLink"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Shop Now
          </Link>
        </div>
        <div>
          <img src={ImageProductFive} />
          <h1>Black T-shirt.</h1>
          <span>$20.99</span>

          <Link
            to="/ProductFive"
            id="QiukLink"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Shop Now
          </Link>
        </div>
        <div>
          <img src={ImageProductSIX} />
          <h1>Blue Jacket.</h1>
          <span>$120.99</span>

          <Link
            to="/ProductSix"
            id="QiukLink"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Shop Now
          </Link>
        </div>
      </div>
      <div id="Our_Product">
        <div>
          <img src={ImageProductSEVEN} />
          <h1>Men Shoes.</h1>
          <span>$70.99</span>

          <Link
            to="/ProductSeven"
            id="QiukLink"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Shop Now
          </Link>
        </div>
        <div>
          <img src={ImageProductHeight} />
          <h1>Nike Shoes.</h1>
          <span>$100.99</span>

          <Link
            to="/ProductHeight"
            id="QiukLink"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Shop Now
          </Link>
        </div>
        <div>
          <img src={ImageProductNINE} />
          <h1>Red Shoes.</h1>
          <span>$95.99</span>

          <Link
            to="/ProductNine"
            id="QiukLink"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Shop Now
          </Link>
        </div>
      </div>
      <div id="Our_Product">
        <div>
          <img src={ImageProductTen} />
          <h1>Usa Cap.</h1>
          <span>$10.99</span>

          <Link
            to="/ProductTen"
            id="QiukLink"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Shop Now
          </Link>
        </div>
        <div>
          <img src={ImageProductEleven} />
          <h1>Women Cap.</h1>
          <span>$15.99</span>

          <Link
            to="/ProductEleven"
            id="QiukLink"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Shop Now
          </Link>
        </div>
        <div>
          <img src={ImageProductTwelve} />
          <h1>man cap.</h1>
          <span>$20.99</span>

          <Link
            to="/ProductTwelve"
            id="QiukLink"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Shop Now
          </Link>
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
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Contact US
              </Link>
            </li>
            <li>
              <Link
                to="/About"
                id="QiukLink"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                AboutUs
              </Link>
            </li>
            <li>
              <Link
                to="/Product"
                id="QiukLink"
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
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Blog
              </Link>
            </li>
            <li>
              <a href="Dearer">Support</a>
            </li>
            <li>
              <a href="Dearer">Careers</a>
            </li>
            <li>
              <a href="Dearer">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div id="Contact">
          <h1>Contact</h1>
          <ul>
            <li>
              <a href="Dearer">56 Hendford Rd, Warwickshire, BH10 5AU</a>
            </li>
            <li>
              <a href="Dearer">dearer@gmail.com</a>
            </li>
            <li>
              <a href="Dearer">01202 511337</a>
            </li>
            <li>
              <a href="Dearer"></a>
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
