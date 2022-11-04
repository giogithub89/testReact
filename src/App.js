

import Home from './Home';
import Details from './Details';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path=':id' element={<Details/>}/>
              
            
          </Routes>
        </div>
      </BrowserRouter>
      
     
    
  );
}

export default App;
