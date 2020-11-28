import { Link } from 'react-router-dom'
import '../Styles/Pages/sobre.css'

const Home = () =>{
    return (
        <div className="body-sobre" >
            <header>
                
                <div className="header">
                <h1> Adrielly Silva</h1>
            
                </div>
                <div className="header-btn">

                
                <Link to="/musicas" >
                    <button className="btn-1">Musicas Favoritas</button>
             </Link>
           
             <Link to="/" >
                    <button className="btn-2">Home</button>
                    </Link>
                    </div>
            </header>
            
            <div >

                <main>

                  <div className="sobre-mim">
                     
                      <div className="div-sobremim">

                      
                  <p> <h2>Sobre Mim</h2>
                  Tenho 19 anos, moro em Recife e sou estudante do 4º período de Ciência da Computação. Sou desenvolvedora Front-End e admiradora do UX Design. Gosto muito da forma que a tecnologia está presente no mundo e as mudanças que ela é capaz de fazer. Sempre disposta a aprender e encarar desafios. 
                  </p>

                  
                  <div>
                      <ul>
                      <h2>Habilidades</h2>
                          <li>HTML/CSS</li>
                          <li>JavaScript</li>
                          <li>React</li>
                          <li>Bootstrap</li>
                          <li>JQuery</li>
                          <li>Git e Github</li>
                          <li>Figma</li>
                      </ul>

                  </div>

                  <div>
                      <ul>
                      <h2>Coisas que eu gosto</h2>
                          <li>Comer</li>
                          <li>Dormir</li>
                          <li>Cozinhar</li>
                          <li>Música</li>
                          <li>Família</li>
                          <li>Cinema</li>
                          <li>Netflix</li>
                      </ul>

                  </div>
                 
                  </div>
                  </div>
                  
                   
                </main>
                <footer>

                <Link to={{ pathname: "https://www.instagram.com/sc.adrielly/" }} target="_blank">  
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174855.svg" alt="" height='50px' width='50px'/>
                </Link>
                
                <Link to={{ pathname: "https://www.linkedin.com/in/adrielly-silva-509532193" }} target="_blank">  
                <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" height='50px' width='50px'/>
                </Link>
                <Link to={{ pathname: "https://github.com/adriellyscsantos" }} target="_blank">  
                <img src="https://www.flaticon.com/premium-icon/icons/svg/3291/3291695.svg" alt="" height='50px' width='50px'/>
                </Link>
                </footer>
           
            </div>
        </div>
    )
}

export default Home