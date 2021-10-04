
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import Courses from './Components/Courses/Courses';


function App() {
  
  return (
    <div className="App">
        
      <Router>
        
        <Switch>
          
          <Route exact path ='/'>
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
          
          <Route path ='/home'>
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
          </Route>
          
          <Route path ='/courses'>
            <Header></Header>
              <Courses></Courses>
            <Footer></Footer>
          </Route>
          
          <Route path ='/aboutus'>
            <Header></Header>
            <AboutUs></AboutUs>
            <Footer></Footer>
          </Route>
          
          <Route path ='/contactus'>
            <Header></Header>
            <ContactUs></ContactUs>
            <Footer></Footer>
          </Route>
          
          <Route path ='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        
      </Router>
      
    </div>
  );
}

export default App;
