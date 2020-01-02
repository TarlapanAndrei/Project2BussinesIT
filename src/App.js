import React from 'react';
import HomePage from './pages/homePage/homePage.component';
import Header from './components/header/header.component';
import { AppContainer } from './App.styled';
import './App.styled.jsx';

function App() {
  return (
    <AppContainer>
      <Header />
      <HomePage />
    </AppContainer>
  );
}
export default App;
