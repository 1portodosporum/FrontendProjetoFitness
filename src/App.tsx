import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Cadastro from './pages/cadastro/Cadastro';
import Login from './pages/login/Login';

import { AuthProvider } from './contexts/AuthContext';
import ListarAluno from './components/alunos/listaralunos/ListarAluno.';
import ListarTreino from './components/treinos/listartreinos/ListarTreinos';
import FormAluno from './components/alunos/formaluno/FormAluno';
import FormTreino from './components/treinos/formtreino/FormTreino';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
          <Route path='/listaralunos' element={<ListarAluno />} />
          <Route path='/listartreinos' element={<ListarTreino />} />
          <Route path='/formaluno' element={<FormAluno />} />
          <Route path='/formtreino' element={<FormTreino />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
