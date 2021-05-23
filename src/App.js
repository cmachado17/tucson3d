import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import BarraNavegacion from "./components/BarraNavegacion";
import Productos from "./components/Productos";
import SobreNosotros from "./components/SobreNosotros";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Contacto from "./components/Contacto";
import Logo from "./styles/logo.png";

function App() {

  
  const articulos = [
    {
        id: 1,
        titulo: 'Titulo',
        descripcion: 'Esto es una descripcion que deberia ser un poco mas larga',
        precio: 300,
        foto: {Logo}
    },
    {
        id: 2,
        titulo: 'Titulo2',
        descripcion: 'Esto es una descripcion que deberia ser un poco mas larga',
        precio: 800,
        foto: {Logo}
    },
    {
        id: 3,
        titulo: 'Titulo3',
        descripcion: 'Esto es una descripcion que deberia ser un poco mas larga',
        precio: 1300,
        foto: {Logo}
    },
    {
        id: 4,
        titulo: 'Titulo4',
        descripcion: 'Esto es una descripcion que deberia ser un poco mas larga',
        precio: 500,
        foto: {Logo}
    },
    {
      id: 5,
      titulo: 'Titulo5',
      descripcion: 'Esto es una descripcion que deberia ser un poco mas larga',
      precio: 200,
      foto: {Logo}
  },
  {
    id: 6,
    titulo: 'Titulo7',
    descripcion: 'Esto es una descripcion que deberia ser un poco mas larga',
    precio: 500,
    foto: {Logo}
},
]

  return (
    <Router>
      <div className="App">
        <Header />
        <BarraNavegacion />
        <Switch>
            <Route exact path="/">
              <Home articulos={articulos}/>
            </Route>
            <Route path="/productos">
              <Productos articulos={articulos}/>
            </Route>
            <Route path="/sobrenosotros">
              <SobreNosotros />
            </Route>
            <Route path="/contacto">
              <Contacto />
            </Route>
        </Switch>
      
      </div>
      <Footer />
    </Router>
  );
}

export default App;
