import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link to='/'><h2>Movie Reviews</h2></Link>
      <div>
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
      </div>
    </header>
  )
}
