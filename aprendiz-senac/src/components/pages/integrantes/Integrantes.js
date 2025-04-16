import Block from './integrante_block/Block'

import styles from './Integrantes.module.css'

import Desenvolvedor from '../../../assets/integrantes/Desenvolvedor.png'
import IntegranteTeste from '../../../assets/integrantes/ImagemTeste.png'

function Integrantes() {

    return (
        <section className={styles.integrantes_container}>
            <div className={styles.integrantes_content}>
                <h1 className={styles.integrantes_title}>
                    Integrantes
                </h1>
                <div className={styles.dev_project}>
                    <img src={Desenvolvedor} alt='Desenvolvedor' />
                    <h2>
                        Marcos Gabriel
                    </h2>
                    <p>
                        Desenvolvedor Web
                    </p>
                </div>

                <hr />

                <ul className={styles.integrantes_list}>
                    <Block func='Função Integrante' nome='Nome Integrante' foto={IntegranteTeste} />
                    <Block func='Função Integrante' nome='Nome Integrante' foto={IntegranteTeste} />
                    <Block func='Função Integrante' nome='Nome Integrante' foto={IntegranteTeste} />
                    <Block func='Função Integrante' nome='Nome Integrante' foto={IntegranteTeste} />
                    <Block func='Função Integrante' nome='Nome Integrante' foto={IntegranteTeste} />
                    <Block func='Função Integrante' nome='Nome Integrante' foto={IntegranteTeste} />
                    <Block func='Função Integrante' nome='Nome Integrante' foto={IntegranteTeste} />
                    <Block func='Função Integrante' nome='Nome Integrante' foto={IntegranteTeste} />
                    <Block func='Função Integrante' nome='Nome Integrante' foto={IntegranteTeste} />
                    <Block func='Função Integrante' nome='Nome Integrante' foto={IntegranteTeste} />
                    <Block func='Função Integrante' nome='Nome Integrante' foto={IntegranteTeste} />
                    <Block func='Função Integrante' nome='Nome Integrante' foto={IntegranteTeste} />
                </ul>
            </div>
        </section>
    )
}

export default Integrantes