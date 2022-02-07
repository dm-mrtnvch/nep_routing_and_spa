import './App.css';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './components/pages/Home';
import {Contacts} from './components/pages/Contacts';
import {About} from './components/pages/About';
import {NotFound} from './components/pages/NotFound';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <main className="container content">
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contacts}/>
            <Route path="/about" component={About}/>
            <Route component={NotFound}/>
          </Switch>
        </main>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
