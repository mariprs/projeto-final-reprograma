import { Menu }  from "../components/Menu"
import angular from "../assets/Tecnologias/angular.png";
import css from "../assets/Tecnologias/css.png";
import empregabilidade from "../assets/Tecnologias/empregabilidade.png";
import git from "../assets/Tecnologias/git.png";
import github from "../assets/Tecnologias/github.png";
import html from "../assets/Tecnologias/html.png";
import js from "../assets/Tecnologias/js.png";
import uiux from "../assets/Tecnologias/uiux.png";
import styles from "../styles/pages/tech.module.css"

export function Tecnologias(){
  return (
    <>
        <Menu />
      <div className={styles.backgroundPage}>
        </div>
    <div className={styles.pageTecnologias}>
          <span className={styles.tecnologias}>Tecnologias</span>
        <div className={styles.rectangle1}>
          <div className={styles.rectangleHtml}>
            <img className={styles.imgHtml} src={html} />
            <span className={styles.infoHtml}>
              Linguagem de marcação para te ajudar a montar o esqueleto do seu
              site
            </span>
          </div>
          <div className={styles.rectangleCss}>
            <img className={styles.imgCss} src={css} />
            <span className={styles.infoCss}>
              Linguagem de estilização para te ajudar a customizar o seu site
            </span>
          </div>
        </div>
        <div className={styles.rectangle2}>
          <div className={styles.rectangleJs}>
            <img className={styles.jsImg} src={js} />
            <span className={styles.infoJs}>
              Linguagem de programação para estruturar a lógica do seu site
            </span>
          </div>
          {/* <div className="flex-container"> */}
            <div className={styles.rectangleAngular}>
            <img className={styles.angularImg} src={angular} />
              <span className={styles.infoAngular}>
                Framework para te ajudar na estruturação e lógica do seu site
              </span>
            </div>
          {/* </div> */}
        </div>
        <div className={styles.rectangle3}>
          {/* <div className="flex-container-1"> */}
            <div className={styles.rectangleGithub}>
            <img className={styles.githubImg} src={github} />
              <span className={styles.infoGithub}>
                Plataforma essencial para a criação de um portfólio
              </span>
            </div>
          {/* </div> */}
          <div className={styles.rectangleGit}>
            <img className={styles.gitImg} src={git} />
            <span className={styles.infoGit}>
              Aprenda sobre sobre versionamento de código
            </span>
          </div>
        </div>
        <div className={styles.rectangle4}>
          <div className={styles.rectangleUiux}>
            <img className={styles.uiuxImg} src={uiux} />
            <span className={styles.infoUiux}>
              Conhecimentos básicos de experiência do usuário e interfaces
            </span>
          </div>
          <div className={styles.rectangleEmpreg}>
            <img className={styles.empregabilidade} src={empregabilidade} />
            <span className={styles.empregabilidadeInfo}>
              Empregabilidade, processos seletivos, currículo e LinkedIn
            </span>
          </div>
      </div>
    </div>
    </>
  );
};
