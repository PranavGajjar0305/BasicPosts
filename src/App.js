import logo from './logo.svg';
import './App.css';
import Postcard from './Postcard'
import { useEffect, useState } from "react";

function App() {
  let [ispost, setpost] = useState([])
  const fetchingdata = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", { method: "GET" }).then(response => response.json()).then(data => setpost(data))
  }
  useEffect(
    () => {
      fetchingdata()
    }, []
  )
  return (
    <div className="App">
      <h1>Postcard Application - Fetching data via external API</h1>
      {ispost.map(t => (<Postcard key={t.id} prop={t} />))}
    </div>
  );
}

export default App;
