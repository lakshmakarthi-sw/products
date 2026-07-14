import { useApp } from "../app/AppProvider";

const Header = (props) => {
  const { isToggled, handleToggle } = useApp();

  return (
    <header className="header">
      <h2>{props.title}</h2>
      <button role="button" onClick={() => handleToggle(!isToggled)}>
        &#9776;
      </button>
    </header>
  );
}

export default Header;