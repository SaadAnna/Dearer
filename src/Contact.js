import "./Style.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact | Dearer Store</title>
      </Helmet>
      <div id="Contact_Section">
        <h1>Get In Touch</h1>
        <p>
          Have a question or need assistance? Fill out the form below and we'll
          get back <br />
          to you as soon as possible.
        </p>
      </div>
      <div id="Form_Contact">
        <form>
          <input
            type="text"
            onKeyUp={CorrectMessage}
            id="FristNAme"
            placeholder="Frist Name"
          />
          <input
            type="text"
            onKeyUp={CorrectMessage}
            id="LastName"
            placeholder="Last Name"
          />
          <input
            type="email"
            onKeyUp={CorrectMessage}
            id="Email"
            placeholder="Your Email"
          />
          <input
            type="text"
            onKeyUp={CorrectMessage}
            id="City"
            placeholder="City"
          />
          <textarea
            id="Message"
            onKeyUp={CorrectMessage}
            placeholder="Your Message"
          ></textarea>
          <div className="SendMeSSge"> <a id="SendMessage" onClick={MessagSend}>
            Send Message
          </a></div>
         
        </form>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d88064.74796248671!2d-6.682781942002941!3d34.26701210053606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7575f8a6d8643%3A0xc7050653c05e128b!2sKenitra%2C%20Morocco!5e1!3m2!1sen!2ses!4v1722856127213!5m2!1sen!2ses"
          id="location"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
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
  function MessagSend() {
    const FristName = document.getElementById("FristNAme");
    const LastNAme = document.getElementById("LastName");
    const Email = document.getElementById("Email");
    const City = document.getElementById("City");
    const Message = document.getElementById("Message");
    if (FristName.value === "") {
      FristName.style.borderColor = "red";
      LastNAme.style.borderColor = "#efefef ";
      Email.style.borderColor = "#efefef ";
      City.style.borderColor = "#efefef ";
      Message.style.borderColor = "#efefef ";
    } else if (LastNAme.value === "") {
      LastNAme.style.borderColor = "red";
      FristName.style.borderColor = "#efefef ";
      Email.style.borderColor = "#efefef ";
      City.style.borderColor = "#efefef ";
      Message.style.borderColor = "#efefef ";
    } else if (Email.value === "") {
      Email.style.borderColor = "red";
      FristName.style.borderColor = "#efefef";
      LastNAme.style.borderColor = "#efefef";
      City.style.borderColor = "#efefef";
      Message.style.borderColor = "#efefef";
    } else if (City.value === "") {
      City.style.borderColor = "red";
      FristName.style.borderColor = "#efefef";
      LastNAme.style.borderColor = "#efefef";
      Email.style.borderColor = "#efefef";
      Message.style.borderColor = "#efefef";
    } else if (Message.value === "") {
      Message.style.borderColor = "red";
      FristName.style.borderColor = "#efefef";
      LastNAme.style.borderColor = "#efefef";
      Email.style.borderColor = "#efefef";
      City.style.borderColor = "#efefef";
    } else {
      FristName.value = "";
      LastNAme.value = "";
      City.value = "";
      Email.value = "";
      Message.value = "";
      FristName.style.borderColor = "#efefef";
      LastNAme.style.borderColor = "#efefef";
      Email.style.borderColor = "#efefef";
      City.style.borderColor = "#efefef";
      Message.style.borderColor = "#efefef";
    }
  }
  function CorrectMessage() {
    const FristName = document.getElementById("FristNAme");
    const LastNAme = document.getElementById("LastName");
    const Email = document.getElementById("Email");
    const City = document.getElementById("City");
    const Message = document.getElementById("Message");
    FristName.style.borderColor = "#efefef";
    LastNAme.style.borderColor = "#efefef";
    City.style.borderColor = "#efefef";
    Email.style.borderColor = "#efefef";
    Message.style.borderColor = "#efefef";
  }
}
