import './App.css';
import { Saludo } from './Saludo/Saludo.jsx'
export const App = () => {
  // aqui irian los hooks
  return (
    <div>
    <input type="text" placeholder='Ingrese su Saludo' />
      <Saludo mensaje={"Hola, buenos dias"} />
    </div>
  )
}