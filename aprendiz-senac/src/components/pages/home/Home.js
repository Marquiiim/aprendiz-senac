import styles from './Home.module.css'

function Home() {

    return (
        <section className={styles.container_home}>
            <div className={styles.content_home}>
                <div className={styles.text_home}>
                    <h2>
                        Rumo à
                    </h2>
                    <h1>
                        conquista
                    </h1>
                    <p>
                        Minicurso desenvolvido para inserção da juventude no mercado de trabalho
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Home