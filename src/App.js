import './App.css';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './components/pages/Home';
import {Contacts} from './components/pages/Contacts';
import {About} from './components/pages/About';
import {NotFound} from './components/pages/NotFound';
import {Movie} from './components/pages/Movie';
import {useEffect} from 'react';
import {getMealById} from './api';

function App() {

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => console.log(response))
  }, [])

  return (
    <>
      <Router>
        <Header/>
        <main className="container content">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contacts}/>
            <Route path="/about" component={About}/>
            <Route path="/movies/:title" component={Movie}/>
            <Route component={NotFound}/>
          </Switch>
        </main>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
