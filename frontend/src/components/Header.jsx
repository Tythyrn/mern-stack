import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { userAtom } from '../atoms/authAtoms';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [user, setUser] = useAtom(userAtom);

    const navigate = useNavigate();

    const onLogout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/login');
    }

  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>GoalSetter</Link>
        </div>
        <ul>
        {user ? (
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
        </ul>
    </header>
  )
}

export default Header