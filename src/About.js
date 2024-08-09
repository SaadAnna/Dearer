import "./Style.css";
import { Link } from "react-router-dom";
import TeamImage from "./pexels-rethaferguson-3810795.jpg";
import CompanyImage from "./pexels-pixabay-269077.jpg";
import JhonImage from "./women_face_one.png";
import JackImage from "./women_face_two.png";
import ALIsaImage from "./mane_face.png";
export default function About() {
  return (
    <div>
      <div id="About_Section">
        <div className="Team">
          <h1>Work Team.</h1>
          <p>
            <br />
            Our team will help you facilitate your trips and any <br />
            problems you may encounter before the students <br />
            arrive to you. If there is any problem <br />
            do not hesitate to contact them.
          </p>
          <div>
            <Link
              to="/Contact"
              className="Contact"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              Contact US
            </Link>
            <Link
              to=""
              className="Learn_More"
              onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}
            >
              Learn More
            </Link>
          </div>
        </div>
        <img src={TeamImage}></img>
      </div>
      <div id="Dearer_history">
        <h1>Our Mission And Values</h1>
        <p>
          At Dearer, our mission is to provide our customers with the best
          possible <br />
          shopping experience. We are committed to delivering high-quality
          products <br />
          excellent customer service, and a sustainable business model that
          benefits <br />
          our community and the environment.
        </p>
        <div className="dearer_Work">
          <div>
            <h1>Our History</h1>
            <p>
              Dearer was founded in 2020 by a team of passionate entrepreneurs
              who
              <br /> saw an opportunity to disrupt the e-commerce industr Over
              the yearsy
              <br /> we have grown to become a trusted brand, known for our
              <br /> commitment to quality, innovation <br />
              and customer satisfaction.
            </p>
          </div>
          <img src={CompanyImage}></img>
        </div>
      </div>
      <div id="Our_Team">
        <h1>Meet Our Team</h1>
        <p>
          Our team of dedicated professionals is the backbone of Acme Inc. Meet
          the individuals who are committed to
          <br />
          delivering exceptional products and services to our customers.
        </p>
      </div>
      <div id="Comapany_Team">
        <div>
          <img src={JackImage}></img>
          <h1>Alina Jones.</h1>
          <p>England.</p>
        </div>
        <div>
          <img src={JhonImage}></img>
          <h1>Sofia Pena.</h1>
          <p>USA.</p>
        </div>
        <div>
          <img src={ALIsaImage}></img>
          <h1>Mark Oles</h1>
          <p>China.</p>
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
