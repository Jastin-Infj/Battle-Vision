import "../scss/style.scss";
import "../css/style.css";

import logo from "../images/logo.png";

const image = document.getElementById("img-test");
// url-loader で path の文字列が取れている
image.src = logo;