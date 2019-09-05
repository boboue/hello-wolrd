import React from 'react';
import {Header} from './Components/header'
import {Items} from './Components/items'

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Items />
      </div>
    </>
  );
}

export default App;
