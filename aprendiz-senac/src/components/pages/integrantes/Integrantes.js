import Block from './integrante_block/Block'

import styles from './Integrantes.module.css'

import Desenvolvedor from '../../../assets/integrantes/Desenvolvedor.png'

import Bia from '../../../assets/integrantes/Bia.jpeg'
import Emilly from '../../../assets/integrantes/Emilly.jpeg'
import Nycolas from '../../../assets/integrantes/Nycolas.jpeg'
import Peterson from '../../../assets/integrantes/Peterson.jpeg'
import Camila from '../../../assets/integrantes/Camila.jpeg'
import Nicole from '../../../assets/integrantes/Nicole.jpeg'
import Davi from '../../../assets/integrantes/Davi.jpeg'
import Guilherme from '../../../assets/integrantes/Guilherme.jpeg'
import Sarah from '../../../assets/integrantes/Sarah.jpeg'
import Vinicius from '../../../assets/integrantes/Vinicius.jpeg'
import Douglas from '../../../assets/integrantes/Douglas.jpeg'
import Myrla from '../../../assets/integrantes/Myrla.jpeg'
import Luiza from '../../../assets/integrantes/Luiza.jpeg'
import Galdino from '../../../assets/integrantes/Galdino.jpeg'
import Fernanda from '../../../assets/integrantes/Fernanda.jpeg'
// import Eduarda from '../../../assets/integrantes/'

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
                    <Block func='Atuação' nome='Fernanda Azevedo' foto={Fernanda} />
                    <Block func='Lideres de equipe' nome='Emilly de Sousa' foto={Emilly} />
                    <Block func='Lideres de equipe' nome='João Nycolas' foto={Nycolas} />
                    <Block func='Lideres de equipe' nome='Nicole Evelyn' foto={Nicole} />
                    <Block func='Atuação' nome='João Davi' foto={Davi} />
                    <Block func='Atuação' nome='Guilherme Pinho' foto={Guilherme} />
                    <Block func='Gravação' nome='Raimundo Peterson' foto={Peterson} />
                    <Block func='Gravação' nome='Douglas Trindade' foto={Douglas} />
                    <Block func='Edição' nome='Gustavo Galdino' foto={Galdino} />
                    <Block func='Roteiro' nome='Camila Bezerra' foto={Camila} />
                    <Block func='Roteiro' nome='Maria Luiza' foto={Luiza} />
                    <Block func='Pesquisa' nome='Ana Beatriz' foto={Bia} />
                    <Block func='Pesquisa' nome='Cauã Alves' foto='' />
                    <Block func='Pesquisa' nome='Ana Clara' foto='' />
                    <Block func='Pesquisa' nome='Sarah Fernandes' foto={Sarah} />
                    <Block func='Pesquisa' nome='Vinicius Silva' foto={Vinicius} />
                    <Block func='Pesquisa' nome='Myrla Moura' foto={Myrla} />
                    <Block func='Pesquisa' nome='Eduarda Suaya' foto='' />
                </ul>
            </div>
        </section>
    )
}

export default Integrantes