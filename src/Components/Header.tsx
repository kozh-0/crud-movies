import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';

export default function Header() {

  const [isAuthed, setIsAuthed] = useState<any>('');


  const logOut = () => {
    Cookies.remove('movieToken');
    window.location.reload();
  }
  
  useEffect(() => {
    setIsAuthed(Cookies.get('movieToken'))
  }, [])

  return (
    <header>
      <Link to='/crud-movies'><h2>Movie Reviews</h2></Link>
      <div>
        <Link to='/crud-movies/users'>Users</Link>
        {!isAuthed ? <>
          <Link to='/crud-movies/register'>Register</Link>
          <Link to='/crud-movies/login'>Login</Link>
        </> : <button onClick={logOut}>Log out</button>}
      </div>
    </header>
  )
}
