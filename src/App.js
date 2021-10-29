import "./App.css";
import Home from "./components/Home";
import Store from "./Pages/Store";
import Chat from "./Pages/Chat"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Gallery from "./Pages/Gallery";
import Medicine from "./Pages/Medicine"

function App() {
  return (
    <Router>
      <Switch>
        <div className="app">
          <Route path="/" exact component={HomePage} />
          <Route path="/store" component={Store} />
          <Route path="/chat" component={Chat} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/medicine" component={Medicine} />
        </div>
      </Switch>
    </Router>
  );
}

const HomePage = () => <Home />;

export default App;
