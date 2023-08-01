import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/Items/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailListContainer from './components/ItemDetail/ItemDetailContinerlist';



function App() {
  return (
    <BrowserRouter>
      <NavBar/>      
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/product/:productId' element={<ItemDetailListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
