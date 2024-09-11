import './App.css';

function App() {
  return (
   
    <body>

      <nav class="topo">
        <ul class="menu">
          <li><a class="link" href="#" >HOME</a></li>
          <li><a class="link" href="#">ABOUT</a></li>
          <li><a class="link" href="#">PROJECTS</a></li>
      
        </ul>
      </nav>
     
      <section class="informes">
        <div >
          <h2 class="text">Front-End and Back-End <br></br> Developer </h2>
          <p class="text">Hi, i'm Joel Porto.A developer Front-end and Back-end based in São Paulo, Brazil </p>
          <div class="links">
          <img src="GitHub icon.png" class="imglink" alt=""></img>
          <a class="linkContact" href="https://github.com/joelporto" target="_blank" >GitHub </a>

          <img src="linkedin Icon.png" class="imglink" alt=""></img>
          <a class="linkContact" href="https://www.linkedin.com/in/joel-lima-a781b4245" target="_blank"  >LinkedIn</a>

          </div>

        </div>

        <div>
          <img src="provisoria.png" class="foto" alt=""></img>

        </div>

      </section>

      <footer >
        <div class="rodape">
        <h2 class="techstack">Tech Stack |</h2>
        <img src="css.png" class="css icon" alt=""></img>
        <img src="html.png" class="html icon" alt=""></img>
        <img src="java.png" class="java icon" alt=""></img>
        <img src="js.webp" class="js icon" alt=""></img>
        <img src="python.webp" class="python icon" alt=""></img>
        <img src="logo192.png" class="react icon" alt=""></img>

        </div>
        

      </footer>

   
    </body>

  );
}

export default App;
