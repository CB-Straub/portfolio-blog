//react-router
import {  Switch, Route } from 'react-router-dom'

//components
import NavBar from './components/NavBar';



//context
import BlogProvider from './context/BlogProvider'

//pages
import Home from './Pages/Home'
import Post from './Pages/Post'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Merch from './Pages/Merch/Merch';
 

//css styles
import './App.css';

function App() {

 
  return (
     <>
    
        <div className='App'>
        <BlogProvider>

                 <NavBar />
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/:postId' exact component={Post}/>
                    
                </Switch>
             
        </BlogProvider>
         </div>
      
         <div className='pages-container'>
                  <Switch>
                  <Route exact path='/about' component={About}/>
                  <Route path='/merch' exact component={Merch}/>
                  <Route path='/contact' exact component={Contact}/>
                  </Switch>  
         </div>
                  

                 
     
     
     </> 
    
    
  );
}

export default App;
