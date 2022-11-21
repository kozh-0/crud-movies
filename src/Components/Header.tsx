import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to='/crud-movies'><h2>Movie Reviews</h2></Link>
      <div>
        <Link to='/crud-movies/register'>Register</Link>
        <Link to='/crud-movies/login'>Login</Link>
      </div>
    </header>
  )
}
