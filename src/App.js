//react-router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//components
import NavBar from './components/NavBar';

//context
import BlogProvider from './context/BlogProvider'

//pages
import Home from './Pages/Home'
import Post from './Pages/Post'



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
                    
                   
                </Switch>

               
              
                
              </Router>
      
        </div>

  </BlogProvider>
    
  );
}

export default App;
