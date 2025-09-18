import './App.css'
import NavBarRB from './components/NavBarRB'
import ItemListContainer from './components/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Error404 from './components/Error404';



function App() {

  return (
    <BrowserRouter>
      <NavBarRB/> {/* se deja afuera de las rutas para que se vea en todas las paginas */}


      <Routes>
        <Route path='/' element={<ItemListContainer mensaje="Bienvenidos a la Tienda Online de Poseidon"/>}/>
        <Route path='/item' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Error404/>}/>

</Routes>
      
      </BrowserRouter>
  )
}

export default App
