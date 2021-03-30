import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import ContactUs from './components/contacts/contacts';
import User from './components/user/user';
import Register from './components/register/register';
import Login from './components/login/login'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/user/profile" exact component={User} />
        <Route path="/user/login" exact component={Login} />
        <Route path="/user/register" exact component={Register} />
        <Route path="/user/logout" exact component={ContactUs} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
