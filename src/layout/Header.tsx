import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h2>Movie Reviews</h2>
      <div>
        <Link to='/'>Reviews</Link>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
      </div>
    </header>
  )
}
