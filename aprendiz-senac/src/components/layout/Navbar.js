import styles from './Navbar.module.css'
import Senac from '../../assets/senac.png'

import { Link } from 'react-router-dom'

function Navbar() {

    return (
        <nav className={styles.nav_container}>
            <div className={styles.nav_content}>
                <img src={Senac} alt='Logo SENAC' />
                <ul className={styles.list_nav}>
                    <Link to='/'>
                        Apresentação
                    </Link>
                    <Link to='/integrantes'>
                        Integrantes
                    </Link>
                    <Link to=''>
                        Podcasts
                    </Link>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar