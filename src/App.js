import "./App.css";
import Home from "./components/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
      
        <Route path="/" component={HomePage} />
        
      </div>
    </Router>
  );
}

const HomePage = () => (
  <Home />
);



export default App;
