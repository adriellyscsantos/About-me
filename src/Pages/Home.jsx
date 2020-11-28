import { Link } from 'react-router-dom'
import '../Styles/Pages/home.css'

const Home = () =>{
    return (
        <div id="page-landing">
            
            <div className="content-wrapper">

                <main>
                    <h1> O que eu faço para não surtar</h1>
                    <Link to="/musicas" >
                    <button className="btn-1">Músicas Favoritas</button>
             </Link>
           
             <Link to="/sobre" >
                    <button className="btn-2">Sobre mim</button>
                    </Link>
                </main>
           
            </div>
        </div>
    )
}

export default Home