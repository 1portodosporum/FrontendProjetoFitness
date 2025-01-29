import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Cadastro from './pages/cadastro/Cadastro';
import Login from './pages/login/Login';
import CardAluno from './components/alunos/cardaluno/CardAluno';
import CardTreino from './components/treinos/cardtreino/CardTreino';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastroaluno" element={<CardAluno />} />
        <Route path="/cadastrotreino" element={<CardTreino />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
