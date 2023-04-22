import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { NavBar } from './NavBar/NavBar.jsx';
import { Saludo } from './Saludo/Saludo.jsx'
import { ItemCount } from './ItemCount/ItemCount.jsx';
import { ItemListContainer } from './ItemListContainer/ItemListContainer.jsx';
import { ItemDetailContainer } from './ItemDetailContainer/ItemDetailContainer.jsx'

export const App = () => {
  // aqui irian los hooks
  return (
    <div classname="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>  

        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:ItemId' element={<ItemListContainer/>}/>
        <Route path='*' element={<h1>404 not found</h1>}/>
{/* 
      <ItemCount />
    <input type="text" placeholder='Ingrese su Saludo' />
      <Saludo mensaje={"Hola, buenos dias señores"} />
      <ItemListContainer greeting={"Productos"}/>
      <ItemDetailContainer /> */}


      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;