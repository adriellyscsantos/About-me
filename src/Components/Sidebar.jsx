import { FiArrowLeft } from 'react-icons/fi'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import '../Styles/Components/sidebar.css'

const Sidebar = () =>{
    

    return (
        <aside className="app-sidebar">
            <footer>
            <Link to="/" >
                <button type="button" >
                    <FiArrowLeft size={24} color="#FFF" />
                </button>
                </Link>
            
               
                <Link to="/sobre" >
                <button type="button" >
                    <FiArrowRight size={24} color="#FFF" />
                </button>
            </Link>
            </footer>
        </aside>
    )
}

export default Sidebar