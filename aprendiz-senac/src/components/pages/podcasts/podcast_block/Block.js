import styles from './Block.module.css'

function Block({ link, titulo, sinopse}) {

    return (
        <section className={styles.block_container}>
            <div className={styles.block_content}>
                <div className={styles.block_text}>
                    <h2>
                        {titulo}
                    </h2>
                    <p>
                        {sinopse}
                    </p>
                </div>
                <div className={styles.block_play}>
                    <iframe width='560'
                        height='315'
                        src={link}
                        frameborder='0'
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
        </section>
    )
}

export default Block