// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';
// import ListKontak from './components/ListKontak';

import { AddKontak, ListKontak } from "./components";

function App() {

  // const [nama, setName] = useState('abc');

  return (
    <div style={{padding:'30px'}}>
     <h2>Aplikasi Kontak App</h2>
     <hr />
     <AddKontak/>
     <hr />
     <ListKontak/>
     {/* <ListKontak nama ={nama}/> */}
    </div>
  );
}

export default App;
