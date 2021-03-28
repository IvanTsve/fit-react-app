import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router';

import Header from './components/header/header';
import Main from './components/main/main';
import ContactUs from './components/contacts/contacts';
import User from './components/user/user';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/user/profile" exact component={User} />
        <Route path="/user/login" exact component={ContactUs} />
        <Route path="/user/register" exact component={ContactUs} />
        <Route path="/user/logout" exact component={ContactUs} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
