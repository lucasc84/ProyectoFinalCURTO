import './App.css'
import NavBarRB from './components/NavBarRB'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="main-bg-custom">
      <NavBarRB/>
      <ItemListContainer mensaje="Bienvenidos a la Tienda Online de Poseidon"/>
    </div>
  )
}

export default App
