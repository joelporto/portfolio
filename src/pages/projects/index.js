import './style.css'
import { Link } from 'react-router-dom';

function Projects(){
    return(
        <body>
        <header class="header">
            <h1>My Projects</h1>
            <nav>
                <ul class="nav-links">
                    <li><Link className="a" to="/"> HOME </Link></li>
                    <li><Link className="a"  to="/About"> ABOUT </Link></li>
                    <li><Link className="a"  to="/Projects"> PROJECTS </Link></li>
                </ul>
            </nav>
        </header>
    
        <main class="projects-section">
            <h2>Projetos</h2>
    
            <div class="project-list">
                
                <div class="project-item">
                    <img src="projeto1.jpg" alt="Imagem 1"/>
                    <div class="project-info">
                        <h3>Projeto 1</h3>
                        <p>Descrição </p>
                        <a href="https://github.com/seuusuario/projeto1" target="_blank">Veja no GitHub</a>
                    </div>
                </div>
    
                
                <div class="project-item">
                    <img src="#" alt="Imagem 2"/>
                    <div class="project-info">
                        <h3>Projeto 2</h3>
                        <p>Descrição </p>
                        <a href="https://github.com/seuusuario/projeto2" target="_blank">Veja no GitHub</a>
                    </div>
                </div>
    
            </div>
                <div class="project-item">
                    <img src="#" alt="Imagem 3"/>
                    <div class="project-info">
                        <h3>Projeto 3</h3>
                        <p>Descrição </p>
                        <a href="https://github.com/seuusuario/projeto3" target="_blank">Veja no GitHub</a>
                    </div>
                 
                </div>
                <div class="project-item">
                    <img src="#" alt="Imagem 4"/>
                    <div class="project-info">
                        <h3>Projeto 4</h3>
                        <p>Descrição </p>
                        <a href="https://github.com/seuusuario/projeto3" target="_blank">Veja no GitHub</a>
                    </div>
                 
                </div>
        </main>
    
        <footer class="footer">
            <p>&copy; 2024 My Website. All rights reserved.</p>
        </footer>
    </body>
    );
}

export default Projects