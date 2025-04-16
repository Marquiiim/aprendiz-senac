import styles from './Block.module.css'

function Block({ func, nome, foto }) {

    return (
        <li>
            <div className={styles.img_container}>
                <img src={foto} alt='Integrante' />
            </div>
            <h2>
                {nome}
            </h2>
            <p>
                {func}
            </p>
        </li>
    )
}

export default Block