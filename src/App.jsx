
import './App.css'
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';


const App = () => {

 
  return (

    <>
       
        <NavBar />
        <ItemListContainer saludo="Bienvenido a mi tienda, pronto podras ver los productos" />
        <ItemDetailContainer/>


    </>
    
    
  )
}

export default App
