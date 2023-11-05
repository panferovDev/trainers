import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainPage from './components/Pages/MainPage';
import Layout from './components/Layout';

function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="about" element={<div>About</div>} />
        <Route path="users" element={<div>Users</div>} />
      </Route>
    </Routes>
  );
}

export default App;
