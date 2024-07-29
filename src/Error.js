import "./Style.css";
import ErrorImage from  "./76a15629312ed70c6f3345d3ef62bd55.png";
import { Helmet } from "react-helmet";
export default function Error(){
    return (
        <div>
                   <Helmet>
        <title>Error | Dearer Store</title>
      </Helmet>
    <div id="error_Section">
    <img src={ErrorImage}></img>
    </div>
    <div id="error_Title">
    <h1>
        Sorry! But You Can Not<br/>
        Access This Page.
    </h1>
    </div>

    </div>
)
}