import "./style.css"

function Body(){
    return(
       
        <body>
    <main class="main-content">
        <div class="info-section">
            <h1>Joel Porto</h1>
            <p>Sou um Desenvolvedor Full-stack, Aprocura de uma oportunidade para ingresar na area<br></br> de Desenvolvedor</p>
            <ul>
                <li>Profissão: Desenvolvedor Web</li>
                <li>Location: São Paulo, Brasil</li>
            </ul>
        </div>
        <div class="photo-section">
            <img src="provisoria.png" alt="Foto de perfil"/>
        </div>

        <div class="tech-stack-section">
            <h2 class="techstack">Tech Stack</h2>
            <div class="tech-icons">
                <img src="css.png" alt="CSS"/>
                <img src="html.png" alt="HTML"/>
                <img src="java.png" alt="Java"/>
                <img src="js.webp" alt="JavaScript"/>
                <img src="python.webp" alt="Python"/>
                <img src="logo192.png" alt="React"/>
            </div>
        </div>
    </main>
</body>
        
  
     
    );
}

export default Body;