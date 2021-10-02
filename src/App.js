import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import FeaturedProducts from './components/FeaturedProducts';
import FeaturedServices from './components/FeaturedServices';
import DreamHome from './components/DreamHome';
import ArDesigner from './components/ArDesigner';
import ArView from './components/ArView';
import Shop from './components/Shop';
import ServiceProviders from './components/ServiceProviders';
import MaterialAds from './components/MaterialAds';
import Signin from './components/Signin';
import SignUp from './components/SignUp';
import Planner from './components/Planner';
import Projects from './components/Projects';
import Footer from './components/Footer';

//React Router
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

//Material UI for Icons

function App() {
  return (
      <Router>

      <div className="app">
        <Switch>

          {/* Planner */}
          <Route path="/planner">
             <Header />
             <DreamHome bg="url(/images/dream-home2.jpg)" />
             <Planner />
             <Footer />
          </Route>

          {/* Sign Up */}
          <Route path="/signup">
             <Header />
             <SignUp />
             <Footer />
          </Route>


          {/* Login */}
          <Route path="/login">
             <Header />
             <Signin />
             <Footer />
          </Route>

          {/* AR View */}
          <Route path="/ar-view">
             <Header />
             <ArView />
             <Footer />
          </Route>

          {/* AR Designer */}
          <Route path="/ar-designer">
             <Header />
             <ArDesigner />
             <FeaturedProducts />
             <Footer />
          </Route>

          {/* Purchase Furniture */}
          <Route path="/purchase-furniture">
            <Header />
            <Shop />
            <Footer />
          </Route>

         {/* Hire Service Providers */}
          <Route path="/hire-service-providers">
             <Header />
            <ServiceProviders />
            <Footer />
          </Route>

          {/* Construction Projects */}
          <Route path="/construction-projects">
            <Header />
            <h1 style={{paddingLeft: 80, marginTop: 30}}> BID ON CONTRUCTION PROJECT TENDERS </h1>
            <Projects />
            <Projects />
            <Projects />
            <Projects />
            <FeaturedServices />
            <Footer />
          </Route>

          {/* Material Ads */}
          <Route path="/material-ads">
            <Header />
            <MaterialAds/>
            <Slider image="/images/material-banner.jpg" />
            <MaterialAds/>
            <Footer />
          </Route>

          {/* HOME */}
          <Route path="/">
            <Header />
            <Slider image="/images/slider-banner.jpg"/>
            <FeaturedProducts />
            <DreamHome bg="url(/images/dream-home.jpg)" />
            <FeaturedServices />
            <Footer />
          </Route>

          
        </Switch>
       
      </div>

      </Router>
       

      
   
  );
}

export default App;
