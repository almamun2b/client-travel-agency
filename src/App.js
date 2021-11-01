import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import AuthProvider from './constexts/AuthProvider';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import Galaries from './components/Galaries/Galaries';
import WorldTours from './components/WorldTours/WorldTours';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import AddService from './components/AddService/AddService';
import ManageServices from './components/ManageServices/ManageServices';
import ServceDetails from './components/ServceDetails/ServiceDetails';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            
            <PrivateRoute exact path="/services">
              <Services></Services>
            </PrivateRoute>
            <PrivateRoute path="/services/:serviceId">
              <ServceDetails></ServceDetails>
            </PrivateRoute>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute path="/manageServices">
              <ManageServices></ManageServices>
            </PrivateRoute>
            
            <Route path="/galary">
              <Galaries></Galaries>
            </Route>
            <PrivateRoute path="/world-tours">
              <WorldTours></WorldTours>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
