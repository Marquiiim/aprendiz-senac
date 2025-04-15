import styles from  './Footer.module.css'

function Footer() {

    return (
        <footer className={styles.footer_container}>
            <p>
                &copy; 2025 - Projeto desenvolvido por Marcos Gabriel para fins didáticos e de aprendizagem.
            </p>
            <p>
                Este conteúdo tem caráter educativo e não possui fins comerciais.
            </p>
        </footer>
    )
}

export default Footer