import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/Items/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailListContainer from './components/ItemDetail/ItemDetailContinerlist';
import CartContextProvider from './Context/CartContext';
import FormList from './components/Form/FormList';
import { Button } from 'react-bootstrap';
import { propulateDB } from './services/populateDB';
import { datamock } from './services/db_products';




function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/product/:productId' element={<ItemDetailListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
        </Routes>
        <FormList/>
        <Button onClick={()=>propulateDB(datamock)}>Poblar DB</Button>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
