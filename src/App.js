import React from 'react';
import GlobalStyle from './theme/GlobalStyle'

import Contariner from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Contariner />
      <Footer />
    </div>
  );
}

export default App;
