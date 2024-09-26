import { Link } from 'react-router-dom';

export function NavBar({ user }) {
  // divide them up, dashboard and login/profile-posts-logout
  return (
    <nav>
      <div className='left'>
        <Link to='/'>Dashboard</Link>
      </div>
      <div className='right'>
        {user ? (
          <>
            <Link to='profile'>Profile</Link>
            <Link to='posts'>Posts</Link>
            <Link to='logout'>Logout</Link>
          </>
        ) : (
          <Link to='Login'>Login</Link>
        )}
      </div>
    </nav>
  );
}
