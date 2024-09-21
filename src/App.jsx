import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <h1>dashboard</h1>
      {user ? <h2>{user.name}</h2> : <h2>please log in</h2>}
    </>
  );
}

export default App;
