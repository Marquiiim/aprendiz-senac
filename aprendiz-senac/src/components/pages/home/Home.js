import styles from './Home.module.css'
import Lorax from '../../../assets/lorax SENAC.png'

function Home() {

    return (
        <section className={styles.container_home}>
            <div className={styles.content_home}>
                <div className={styles.text_home}>
                    <h1>
                        Os <span>Lorax</span>
                    </h1>
                    <p>
                        Aprenda aqui as habilidades essenciais para se destacar no mercado de trabalho como <span>aprendiz</span>!
                    </p>
                </div>
                <img src={Lorax} alt='Mascote Aprendizagem' />
            </div>
        </section>
    )
}

export default Home