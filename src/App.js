import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';

import Navbar from './components/Navbar'
import Store from './pages/Store';

import CartProvider from './context/cartContext';

function App() {
  return (
    <CartProvider>
      <Container>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route index element={<Store />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </CartProvider>
  );
}

export default App;
