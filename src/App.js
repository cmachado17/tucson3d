import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Header from './components/Header';
import BarraNavegacion from "./components/BarraNavegacion";
import Productos from "./components/Productos";
import SobreNosotros from "./components/SobreNosotros";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <BarraNavegacion />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/productos">
            <Productos />
          </Route>
          <Route path="/sobrenosotros">
            <SobreNosotros />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
