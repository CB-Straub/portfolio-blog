//react-router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//components
import NavBar from './components/NavBar';



//context
import BlogProvider from './context/BlogProvider'

//pages
import Home from './Pages/Home'
import Post from './Pages/Post'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Merch from './Pages/Merch';
 

//css styles
import './App.css';

function App() {

 
  return (
      
    <BlogProvider>
        <div className='App'>
             <Router>

                 <NavBar />
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/:postId' exact component={Post}/>
                    <Route path='/about' exact component={About}/>
                    <Route path='/merch' exact component={Merch}/>
                    <Route path='/contact' exact component={Contact}/>
                </Switch>

             </Router>
         </div>
         
  </BlogProvider>
           
    
  );
}

export default App;
