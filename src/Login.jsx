import { useOutletContext, useNavigate } from 'react-router-dom';
import { useRef } from 'react';

export function Login() {
  const [user, setUser] = useOutletContext();
  const input = useRef('');
  const navigate = useNavigate();

  const onSubmit = e => {
    e.preventDefault();
    setUser(input.current);
    navigate('/dashboard');
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor='username'>Username: </label>
      <input
        type='text'
        id='username'
        name='username'
        onChange={e => (input.current = e.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  );
}
