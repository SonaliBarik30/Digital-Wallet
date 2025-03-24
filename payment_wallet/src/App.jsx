import { useState } from 'react';
import './App.css';
import Welcome from './Components/Welcome';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Welcome name="Sonali" />
      <Welcome name="Pooja" />
    </>
  );
}

export default App;
