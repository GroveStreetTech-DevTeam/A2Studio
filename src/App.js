import AllRoutes from './AllRoutes';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter as Router} from "react-router-dom";
 
function App() {
  return (
    <div className="App">
      <Router>
        <AllRoutes/>
      </Router>
    </div>
  );
}

export default App;
