import { Link } from 'react-router-dom';
import './style.css'

function About(){
    return(
        <body>
        <header class="header">
            <h1>About Me</h1>
            <nav>
                <ul class="nav-links">
                    <li><Link className="a" to="/"> HOME </Link></li>
                    <li><Link className="a"  to="/About"> ABOUT </Link></li>
                    <li><Link className="a"  to="/Projects"> PROJECTS </Link></li>
                </ul>
            </nav>
        </header>
    
        <main class="about-section">
            <div class="about-content">
                <div class="about-photo">
                    <img src="provisoria.png" alt="minha Foto"/>
                </div>
                <div class="about-text">
                    <h2>Quem Sou Eu?</h2>
                    <p>Olá! Meu nome é <strong>Joel Porto</strong> e sou <em>Desenvolvedor Web </em>
                     com experiência em várias tecnologias de front-end e back-end. Tenho uma paixão por criar soluções tecnológicas 
                     inovadoras e eficazes que melhoram a vida das pessoas. 
                     Meu trabalho é focado em desenvolver projetos funcionais, escaláveis e fáceis de manter.</p>
    
                    <p>desenvolvi diversas aplicações utilizando uma variedade de ferramentas como <strong>JavaScript</strong>,
                          <strong>React</strong>, <strong>Node.js</strong>, <strong>Python</strong>, e muito mais.
                           Também tenho experiência com banco de dados como <strong>MySQL</strong> e <strong>MongoDB</strong>,
                            além de seguir boas práticas de desenvolvimento, como <strong>Testes Automatizados</strong> e <strong>
                                Integração Contínua</strong>.</p>
    
                    <p>Além do meu trabalho técnico, tenho habilidades em comunicação e trabalho em equipe, o que me permite
                         colaborar com diferentes equipes de forma eficaz, entregando resultados de alta qualidade em prazos apertados.</p>
    
                    <h2>Minhas Habilidades</h2>
                    <ul>
                        <li>Desenvolvimento Full Stack (Front-end e Back-end)</li>
                        <li>HTML5, CSS3, JavaScript, React</li>
                        <li>Node.js, Express, Python, Java</li>
                        <li>Banco de Dados: MySQL, MongoDB</li>
                        <li>Versionamento de Código com Git e GitHub</li>
                        <li>Metodologias Ágeis (Scrum)</li>
                    </ul>
    
                    <h2>Experiência Profissional</h2>
                    <p></p>
    
                    <h2>Objetivos</h2>
                    <p>Meu objetivo é continuar a aprender e evoluir como profissional de tecnologia, me mantendo atualizado
                         com as últimas tendências e práticas de desenvolvimento. Estou sempre aberto a novos desafios e
                          oportunidades de crescimento, onde possa aplicar meu conhecimento e contribuir para o sucesso de novos projetos.</p>
    
                    <p>Se você está interessado em saber mais sobre mim ou sobre meu trabalho, fique à vontade para entrar em contato!</p>
                </div>
            </div>
        </main>
    
        <footer class="footer">
            <p>&copy; 2024 My Website. All rights reserved.</p>
        </footer>
        </body>
    );
}

export default About