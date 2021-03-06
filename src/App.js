import './App.css';
import { Switch, Route, Redirect } from 'react-router';
import { useEffect, useState } from 'react';
import firebase from './scripts/firebase';

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Main from './components/main/main';
import ContactUs from './components/contacts/contacts';
import User from './components/user/user';
import Posts from './components/user/userPosts/userPosts';
import Register from './components/register/register';
import Login from './components/login/login';
import EditPage from './components/EditPost/editPost';


function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {

    firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser)
      } else {
        setUser(null)
      }
    })
  },[])

  

  return (
    <div className="App">
      <Header user={user} />
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/user/profile" exact component={User}/>
        <Route path="/user/post/:id/edit" exact component={EditPage}/>
        <Route path="/user/posts" exact component={Posts}/>
        <Route path="/user/login" exact component={Login} />
        <Route path="/user/register" exact component={Register} />
        <Route path="/user/logout" render={prop => {
          firebase.auth().signOut().then(r => localStorage.removeItem("em"));
          return (<Redirect to='/' />)

        }} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
