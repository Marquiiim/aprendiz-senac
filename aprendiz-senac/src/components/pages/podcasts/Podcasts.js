import styles from './Podcasts.module.css'

import Block from './podcast_block/Block'

function Podcasts() {

    return (
        <section className={styles.podcasts_container}>
            <div className={styles.podcasts_content}>
                <h1>
                    Podcasts
                </h1>

                <hr />

                <ul className={styles.podcast_list}>
                    <Block titulo='1 Episódio - Projeto de vida'
                        sinopse='No primeiro episódio, conhecemos o Mateus Sena, um jovem que protagoniza uma luta para se descobrir e desenvolver sua trajetória no mercado de trabalho. Para conseguir dar início a sua jornada, ele encontra um método de organizar a sua vida profissional: o projeto de vida.'
                        link='https://www.youtube.com/embed/RuX6Rnv4Svk' />
                    <Block titulo='2 Episódio - Educação financeira'
                        sinopse='Não se trata apenas de "poupar", mas de dar um propósito ao seu suado salário. Por falta de planejamento, Mateus acaba gastando todo o dinheiro de forma impulsiva, o que serve de gatilho para aprendermos sobre gestão de recursos.'
                        link='https://www.youtube.com/embed/RuX6Rnv4Svk' />
                    <Block titulo='3 Episódio - Inteligência emocional'
                        sinopse='Após cometer um erro no trabalho, Mateus se sente profundamente abalado e chega a pensar que perderia o emprego. Diante disso, seu pai, Policarpo, o acolhe e o orienta sobre a importância de desenvolver a inteligência emocional para lidar melhor com desafios e erros no dia a dia.'
                        link='https://www.youtube.com/embed/RuX6Rnv4Svk' />
                    <Block titulo='4 Episódio - Direitos e deveres do CLT'
                        sinopse='​O episódio explica que, ao assinar a Carteira de Trabalho, Mateus entra em um contrato onde ambas as partes possuem obrigações e garantias. O objetivo é mostrar que a liberdade financeira vem acompanhada de responsabilidade profissional.'
                        link='https://www.youtube.com/embed/RuX6Rnv4Svk' />
                    <Block titulo='5 Episódio - Empreendedorismo'
                        sinopse='O empreendedorismo é a capacidade de identificar problemas e transformar soluções em valor. Ao longo de sua trajetória, Mateus encontra no empreendedorismo uma oportunidade de ampliar seus conhecimentos e desenvolver novas habilidades.'
                        link='https://www.youtube.com/embed/RuX6Rnv4Svk' />
                    <Block titulo='6 Episódio - PJ, PF ou MEI'
                        sinopse='Mateus recebe uma proposta um tanto inusitada para trabalhar em uma empresa com uma rotina de CLT, mas eles pedem que o rapaz seja contratado como pessoa jurídica (PJ)... Será que isso está certo?'
                        link='https://www.youtube.com/embed/RuX6Rnv4Svk' />
                    <Block titulo='7 Episódio - Plano de carreira'
                        sinopse='Na reta final, o protagonista dá um passo firme no projeto de vida que começou a construir. Tudo porque criou um plano de carreira sólido, realista e 100% alinhado com quem ele é. Cada conquista alimenta a próxima — quanto mais avança, maiores ficam seus sonhos.'
                        link='https://www.youtube.com/embed/RuX6Rnv4Svk' />
                </ul>
            </div>
        </section>
    )
}

export default Podcasts