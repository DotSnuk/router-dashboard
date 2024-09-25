import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';
import { NavBar } from './NavBar';

function App() {
  const [user, setUser] = useState(null);
  console.log(user);

  return (
    <>
      <NavBar user={user} />
      <main>
        <Outlet context={[user, setUser]} />
      </main>
    </>
  );
}

export default App;
