import logotipo from '../assets/inclu1.png'
import styles from '../styles/components/menu.module.css'

function ImgLogo() {
    return (
        <img src={logotipo} className={styles.imgLogo} alt="Logo com o símbolo do autismo, que é o símbolo do infinito juntamente com as cores que também representam o autismo, que são as cores do arco-íris" />
    )
   }

   export default ImgLogo 