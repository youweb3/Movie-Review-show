import { useState } from 'react'
import Header from './assets/Components/Header/Header';
import Movies from './assets/Components/Movies/Movies';
function App() {
  return (
    <div className='app'>
      <Header/>
      <main>
        <Movies/>
      </main>
    </div>
  );
};

export default App;
