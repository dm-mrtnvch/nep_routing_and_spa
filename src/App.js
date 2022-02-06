import './App.css';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import {Home} from './components/pages/Home';
import {Contact} from './components/pages/Contact';
import {About} from './components/pages/About';
import {NotFound} from './components/pages/NotFound';

function App() {
  return (
    <>
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/contact" component={Contact}/>
          <Route  path="/about" component={About}/>
          <Route component={NotFound}/>
        </Switch>
      </Router>
      <main className="container content">


      </main>
      <Footer/>
    </>
  );
}

export default App;
