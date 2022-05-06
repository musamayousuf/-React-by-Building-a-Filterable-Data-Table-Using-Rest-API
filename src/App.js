import './App.css';
import Table from './Table';
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div >

      <Router>
     
            <Table />
       
      </Router>
    </div>
  );
}

export default App;