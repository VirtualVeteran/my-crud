import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const LogoutFunction = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the cookies
    Cookies.remove('userId');
    Cookies.remove('userName');

    // Redirect to homepage after logging out
    navigate('/');
  };

  return { handleLogout };
};

export default LogoutFunction;
