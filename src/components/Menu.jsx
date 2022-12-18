import { Link } from "react-router-dom";
import ImgLogo from "./LogoInclu.jsx"
import styles from '../styles/components/menu.module.css'

export function Menu() {
    return(
        <div className={styles.menuBg}>
            <ul className={styles.menuUl}>
                <li>
                <ImgLogo />
                </li>
                <li>
                </li>
                <li className={styles.menuItem}>
                    <Link className={styles.menuLink} to="/">início</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link className={styles.menuLink} to="/ensino">ensino</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link className={styles.menuLink} to="/sobre">sobre nós</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link className={styles.menuLink} to="/voluntarios">voluntários</Link>
                </li>
                <li className={styles.menuItem}>
                    <Link className={styles.menuLink} to="/contato">contato</Link>
                </li>
                <li>
                <Link to="/matriculas"> <button className={styles.buttonBg}>
                    MATRÍCULAS ABERTAS
                </button>
                </Link>

                </li>
            </ul>
        </div>
    )
}