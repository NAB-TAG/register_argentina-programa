import ProductDetail from './pages/ProductDetail/ProductDetail'

// Importo bootstrap y fontawesome
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <>
      <Navbar />
      <ProductDetail />
    </>
  )
}

export default App
