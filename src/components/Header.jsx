import Logo from "../components/Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
      <Logo />
      <div>
        <Navbar />
      </div>
    </header>
  );
}
