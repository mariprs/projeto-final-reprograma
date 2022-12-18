import styles from "../styles/pages/homepage.module.css";
import homepagePic from "../assets/homepagePic.png";
import { Menu }  from "../components/Menu"
import backgroundHomepagePic from "../assets/backgroundHomepagePic.png"
import { Link } from "react-router-dom";

export function Inicio() {
  return (
    <div className={styles.inicio}>
      <Menu />
        <div className={styles.background}>
        </div>
      <img className={styles.homepagePic} src={homepagePic} />
      <span className={styles.titleInicio}>
        INCLU()
      </span>
      <span className={styles.subtitleInicio}>
        pode nos chamar de “inclu”
      </span>
      <div className={styles.pContainer}>
        <span className={styles.pText}>
          Ensinamos programação front-end <span className={styles.enfase}> do zero </span> 
           para pessoas neuroatípicas 
          <Link to='/Ensino' className={styles.buttonSpace}>
            <button className={styles.pButton}>
              Clique aqui para saber mais
            </button>
          </Link>
        </span>
      </div>
    </div>
  );
};
