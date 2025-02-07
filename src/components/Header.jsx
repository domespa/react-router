import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <img
        src="https://www.ricettegourmet.com/wp-content/uploads/2024/02/Ricette-gourmet-logo-trasparente.png"
        alt="Logo"
      />
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Homepage</NavLink>
            </li>
            <li>
              <NavLink to="/ListRecipe">Lista Ricette</NavLink>
            </li>
            <li>
              <NavLink to="/AboutUs">Chi siamo</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
