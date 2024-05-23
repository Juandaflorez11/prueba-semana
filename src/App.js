import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PostDetails from './components/PostDetails';
import ProtectedRoute from './components/ProtectedRoute';
import UserList from './components/UserList';
import SignIn from './components/SignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetails />} />
        <ProtectedRoute path="/users" element={<UserList />} /> {/* Usar ProtectedRoute para proteger la ruta */}
        <Route path="/signin" element={<SignIn />} /> {/* Asumiendo que tienes una ruta para iniciar sesión */}
      </Routes>
    </Router>
  );
}

export default App;