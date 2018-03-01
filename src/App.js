import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div className="App">
<<<<<<< HEAD
      <header>
=======
        <header>
>>>>>>> 766e09124d51a5600ce12484f04a5cdbfb95196f
        <nav>
          <Link to='/'>Landing</Link>
          <Link to='/library'>Library</Link>
        </nav>
<<<<<<< HEAD
         <h1>Bloc Jams</h1>
       </header>
       <main>
        <Route exact path="/" component={Landing} />
        <Route path="/library" component={Library} />
        <Route path="/album/:slug" component={Album} />
       </main>
=======
          <h1>Bloc Jams</h1>
        </header>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album" component={Album} />
        </main>
>>>>>>> 766e09124d51a5600ce12484f04a5cdbfb95196f
      </div>
    );
  }
}

export default App;
