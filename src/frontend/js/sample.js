import "../scss/sample.scss";
import "../css/sample.css";

import logo from "../images/logo.png";

const image = document.getElementById("img-test");
// url-loader で path の文字列が取れている
image.src = logo;