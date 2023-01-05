import { createGlobalStyle } from "styled-components";
import universe from "../assets/images/universe.jpg";
const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "face";
  src: url('https://cdn.jsdelivr.net/npm/galmuri@latest/dist/galmuri.css');
}
@font-face {
     font-family: 'DungGeunMo';
     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff');
     font-weight: normal;
     font-style: normal; 
}
@font-face {
    font-family: 'PuradakGentleGothicR';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.1/PuradakGentleGothicR.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Chosunilbo_myungjo';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/Chosunilbo_myungjo.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family:'Cafe24ClassicType-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-2@1.0/Cafe24ClassicType-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
*,*:before ,*:after {
    /* background-image: url("../assets/images/universe.jpg"); */
    box-sizing: border-box; 
    margin: 0;
    padding:0;
  }
  body {
    font-family:"Cafe24ClassicType-Regular","sans-serif";    
    background-image: url(https://github.com/Raelynne12/mbti-app/blob/master/src/assets/images/ENF.jpg?raw=true);
    background-color: #000;
  }

  input,textarea,button,select{
    font-family: inherit;
  }
  a {
    text-decoration: none;
    color:inherit;
  }
  li {
    list-style: none;
  }
  button {
    border:none;
    outline: none;
    font-family: inherit;
    background: none;
  }
  input[type="text"],textarea {
    outline: none;
    border:none;
    background-color: #fff;
    color:#111;
    border-radius: 5px;
    min-height: 50px;
    padding:0 15px;
  }
  select {
    height: 50px;
    background-color: #fff;
    border-radius: 5px;
    outline: none;
    border:none;
  }
  img {
    vertical-align: top;
  }
  .nav {
    text-shadow: 5px 5px 10px rgba(0,0,0,0.25);
  }
`;
export default GlobalStyle;
