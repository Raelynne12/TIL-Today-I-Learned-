import Header from "./components/Header"
import Main from './components/Main';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Footer from "./components/Footer";
import GlobalStyle from "./components/GlobalStyle";
import AboutMe from "./components/AboutMe";
import MyPortfolio from "./components/MyPortfolio";
import List from "./components/movie-app/List";
import Detail from "./components/movie-app/Detail";
import ProfileDetail from "./components/movie-app/ProfileDetail";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalStyle></GlobalStyle>
        <Header></Header>
        <Routes>
          <Route path = "/" element = {<Main></Main>}></Route>
          <Route path = "/about" element = {<AboutMe></AboutMe>}/>
          <Route path = "/my" element = {<MyPortfolio></MyPortfolio>}/>
          <Route path = "/movie/popular" element = {<List></List>}/>
          <Route path = "/detail/:id" element = {<Detail></Detail>}/>
          <Route path = "/profile/:id" element = {<ProfileDetail></ProfileDetail>}/>
        </Routes>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
