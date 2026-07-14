import { useNavigate } from "react-router";


const SideBar = () => {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
        <div className="sidebar-menu">
            <h2>Shopping</h2>
            <nav>
                <ul>
                    <li tabIndex="0" onClick={() => navigate('/')}>Product List</li>
                    <li tabIndex="0">New Product</li>
                    <li tabIndex="0" onClick={() => navigate('/about')}>About</li>
                </ul>
            </nav>
        </div>
    </aside>
  );
}   

export default SideBar;