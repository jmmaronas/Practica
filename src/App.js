import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/Items/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailListContainer from './components/ItemDetail/ItemDetailContinerlist';
import FormList from './components/Form/FormList';


const links=[
  {
    id:1,
    href:"#",
    title:"Inicio"
  },
  {
    id:2,
    href:"#",
    title:"Categoria1"
  },
  {
    id:3,
    href:"#",
    title:"Categoria2"
  },
  {
    id:4,
    href:"#",
    title:"Contacto"
  }
]

function App() {
  return (
    <BrowserRouter>
      <NavBar links={links}/>
      <FormList/>
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/product/:productId' element={<ItemDetailListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
