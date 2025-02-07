import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Homepage</NavLink>
        </li>
        <li>
          <NavLink to="/ListRecipe">Lista Ricette</NavLink>
        </li>
        <li>
          <NavLink to="/AddRecipe">Aggiungi Ricetta</NavLink>
        </li>
        <li>
          <NavLink to="/AboutUs">Chi siamo</NavLink>
        </li>
      </ul>
    </nav>
  );
}
