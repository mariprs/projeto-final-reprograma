import styles from "../styles/pages/about.module.css"
import { Menu }  from "../components/Menu"
import backgroundAbout from "../assets/About/backgroundAbout.png"
import arrow from "../assets/Ensino/iconArrow.svg"
import canalAutismoLogo from "../assets/About/canalAutismoLogo.svg"
import reprogramaLogo from "../assets/About/reprogramaLogo.png"

export function Sobre() {
    return(
        <div className={styles.page}>
            <Menu />
            <img className={styles.aboutBg} src= {backgroundAbout} />
            <div className={styles.timelineItem}>
                <a href="https://www.canalautismo.com.br" target="_blank">
                    <img className={styles.canalAutismoLogo} src={canalAutismoLogo} />
                </a>
                <div className={styles.container1}>
                    <p className={styles.pAbout}>
                        Ao investigar um diagnóstico de TEA, Mariana (criadora da Inclu) percebeu que não há um espaço de aprendizagem para neuroatípicos de forma acessível no Brasil.
                    </p>
                </div>
            </div>
            <div className={styles.timelineItem}>
                <a href="https://www.reprograma.com.br" target="_blank">
                    <img className={styles.reprogramaLogo} src={reprogramaLogo}/>
                </a>
                <div className={styles.container2}>
                    <p className={styles.pAbout}>
                        Mariana começou a criar a Inclu após ver uma situação de capacitismo em ambiente de ensino.
                    </p>
                </div>
                <div className={styles.container3}>
                    <p className={styles.pAbout}>
                        Ela achou grupos através do
                            <a href="https://www.canalautismo.com.br" target="_blank"> Canal Autismo </a>
                        e começou a coletar opiniões acerca de o que seria válido para tal ambiente.
                    </p>
                </div>
            </div>
            <div className={styles.timelineItem}>
                <div className={styles.container4}>
                    <p className={styles.pAbout}>
                        A Inclu foi utilizada como seu projeto final no bootcamp de Front-end da 
                        <a href="https://www.reprograma.com.br" target="_blank"> Reprograma </a>
                    </p>
                </div>
            </div>
            <div className={styles.timelineItem}>
                <div className={styles.container5}>
                    <ul className={styles.pAbout}>
                        Algumas das tecnologias utilizadas:
                        <li>
                            <img className={styles.arrow} src={arrow} />
                            React
                        </li>
                        <li>
                            <img className={styles.arrow} src={arrow} />
                            Firebase
                        </li>
                        <li>
                            <img className={styles.arrow} src={arrow} />
                            Conceitos de ES6 (função assíncrona)
                        </li>
                        <li>
                            <img className={styles.arrow} src={arrow} />
                            Axios
                        </li>
                        <li>
                            <img className={styles.arrow} src={arrow} />
                            Prototipação com Figma
                        </li>
                        <li>
                            <img className={styles.arrow} src={arrow} />
                            Edição com PhotoShop
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.container6}>
                <ul className={styles.pAbout}>Futuras implementações:
                    <li>
                        <img className={styles.arrow} src={arrow} />
                        Mais pesquisa: um site ainda mais acessível
                    </li>
                    <li>
                        <img className={styles.arrow} src={arrow} />
                        Implementação de versão mobile (talvez um app?)
                    </li>
                    <li>
                        <img className={styles.arrow} src={arrow} />
                        Design mais dinâmico
                    </li>
                </ul>
            </div>
        </div>
    )
}