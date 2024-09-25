import { useOutletContext } from 'react-router-dom';

export function Dashboard() {
  const [user] = useOutletContext();
  console.log(user);
  return (
    <>
      <h1>dashboard</h1>
      {user ? <h2>welcome {user}</h2> : <h2>please log in</h2>}
    </>
  );
}
