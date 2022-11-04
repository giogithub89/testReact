

import Home from './Home';
import Details from './Details';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    
      
        <div className="App">
          
           <BrowserRouter>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path=':id' element={<Details/>}/>
              
            
          </Routes>
          </BrowserRouter>
          
        </div>
      
      
     
    
  );
}

export default App;
