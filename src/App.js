import { Button } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CartContextProvider from './Context/CartContext';
import { propulateDB } from './services/populateDB';
import { datamock } from './services/db_products';
import ItemDetailListContainer from './components/ItemDetail/ItemDetailListContiner';
import Checkout from './components/Checkout/Checkout';
import ItemListContainer from './components/Items/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import CartList from './components/Cart/CartList';
import ProdcutsMaintenance from './components/ProdcutsMaintenance/ProdcutsMaintenance';
import ProductForm from './components/ProdcutsMaintenance/ProductForm';
import UpdateProduct from './components/ProdcutsMaintenance/UpdateProduct';


function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Button onClick={() => propulateDB(datamock)}>Poblar DB</Button>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/product/:productId' element={<ItemDetailListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/cart' element={<CartList />}>
            <Route path='checkout' element={<Checkout />} />
          </Route>
          <Route path='/product_maintenance/' element={<ProdcutsMaintenance />} >
            <Route path='new_product' element={<ProductForm />} />
            <Route path='update/:productId' element={<UpdateProduct/>}/>
          </Route>
          <Route path='*' element={<h1>Page not found</h1>} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
