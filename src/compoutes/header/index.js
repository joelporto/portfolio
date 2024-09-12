import "./style.css"
import { Link } from 'react-router-dom';

function Header(){
    return (
        <header>
             <div class="container">
            <div class="logo">
                <img src="logo.png" alt="Logo"/>
                <h1>Portfólio</h1>
            </div>

            <nav>
                <ul>
                    <li><Link className="a" to="/"> HOME </Link></li>
                    <li><Link className="a"  to="/About"> ABOUT </Link></li>
                    <li><Link className="a"  to="/Projects"> PROJECTS </Link></li>
                    
                </ul>
            </nav>
            </div>
        </header>
    );
}

export default Header;