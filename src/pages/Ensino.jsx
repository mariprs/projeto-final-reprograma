import { Menu }  from "../components/Menu"
import styles from "../styles/pages/ensino.module.css"
import emojisPessoasNegras from "../assets/Ensino/emojisPessoasNegras.svg";
import emojisMulheres from "../assets/Ensino/emojisMulheres.svg";
import arrow from "../assets/Ensino/iconArrow.svg";
import cotasDeco from "../assets/Ensino/cotasDeco.svg";
import bandeiraArcoris from "../assets/Ensino/bandeiraArcoris.svg";
import backgroundEnsino from "../assets/Ensino/backgroundEnsino.png";
import ensinoDeco from "../assets/Ensino/ensinoDeco.svg"
import emojiTomato from "../assets/Ensino/emojiTomato.svg"
import { Link } from "react-router-dom";
import decoFAQ1 from "../assets/Ensino/decoFAQ1.svg"
import decoFAQ2 from "../assets/Ensino/decoFAQ2.svg"


export function Ensino() {
  return (
    <>
      <Menu />
        <div className={styles.darkenImage}>
          <img className={styles.ensinoPic} src={backgroundEnsino} />
        </div>
        <div className={styles.cardsPage}>
          <div className={styles.cotasCard}>
            <img className={styles.backgroundDeco} src={cotasDeco} />
              <div className={styles.rectangleCotas}>
                <span className={styles.title}>
                  Cotas
                </span>
                  <div className={styles.flexContainer}>
                    <img className={styles.arrow2} src={arrow} />
                    <span className={styles.mulheres}>
                      Mulheres
                    </span>
                  </div>
                <img className={styles.emojisMulheres} src={emojisMulheres} />
                <div className={styles.flexContainer1}>
                  <img className={styles.arrow2} src={arrow} />
                  <span className={styles.pessoasNegras}>
                    Pessoas negras
                  </span>
                </div>
                <span className={styles.pretasEPardas}>
                  (pretas e pardas)
                </span>
                <img className={styles.emojisPessoasNegras} src={emojisPessoasNegras} />
                <div className={styles.flexContainer2}>
                  <img className={styles.arrow2} src={arrow} />
                  <span className={styles.lgbtqia}>
                    LGBTQIA+
                  </span>
                </div>
                <span className={styles.subsLGBTQIA}>
                  (abraçamos todos os arco-íris)
                </span>
                <img className={styles.bandeiraArcoIris} src={bandeiraArcoris} />
              </div>
            </div>
          </div>
        <div className={styles.ensinoCard}>
          <img className={styles.ensinoDeco} src={ensinoDeco} />
          <div className={styles. rectangleEnsino}>
            <span className={styles.title}>
              Metodologia
            </span>
          <div className={styles.flexContainer3}>
            <img className={styles.arrow2} src={arrow} />
            <span className={styles.info1}>
              Turmas reduzidas
            </span>
          </div>
          <div className={styles.flexContainer5}>
            <img className={styles.arrow2} src={arrow} />
            <span className={styles.externalLink}> 
              <a href="https://pt.wikipedia.org/wiki/T%C3%A9cnica_pomodoro" target="_blank">
                Método Pomodoro
              </a>
            </span>
          </div>
          <img className={styles.emojiTomato} src={emojiTomato} />
            <div className={styles.flexContainer6}>
              <img className={styles.arrow2} src={arrow} />
              <span className={styles.info3}>
                Acompanhamento com profissionais da saúde mental                    </span>
            </div>
            <div className={styles.flexContainer7}>
              <img className={styles.arrow2} src={arrow} />
              <span className={styles.info4}>
                Perguntas anônimas durante as aulas
              </span>
            </div>
            <div className={styles.flexContainer8}>
              <img className={styles.arrow2} src={arrow} />
              <span className={styles.info5}>
                Feedbacks personalizados e construtivos
              </span>
            </div>
            <div>
              <Link to='/tecnologias' ><button className={styles.conteudoTech}>Veja aqui o conteúdo</button></Link>
            </div>
          </div>
        </div>
        <div className={styles.faqCard}>
          <img className={styles.deco1} src={decoFAQ1} />
          <div className={styles.rectangleFaq}>
            <span className={styles.titleFaq}>
              FAQ
            </span>
          <div className={styles.flexContainer9}>
            <img className={styles.arrow2} src={arrow} />
            <span className={styles.info6}>
              15 alunos por turma
            </span>
          </div>
          <div className={styles.flexContainer10}>
            <img className={styles.arrow2} src={arrow} />
            <span className={styles.info7}>
              Duração de 1 ano
            </span>
          </div>
          <div className={styles.flexContainer11}>
            <img className={styles.arrow2} src={arrow} />
            <span className={styles.info8}>
              Alunos maiores de 18 anos
            </span>
          </div>
          <div className={styles.flexContainer12}>
            <img className={styles.arrow2} src={arrow} />
            <span className={styles.info9}>
              Diagnóstico não obrigatório
            </span>
          </div>
          <div className={styles.flexContainer13}>
            <img className={styles.arrow2} src={arrow} />
            <span className={styles.info10}>
              Te ensinaremos do zero
            </span>
          </div>
          <div className={styles.flexContainer14}>
            <img className={styles.arrow2} src={arrow} />
            <span className={styles.info11}>
              Aulas de 2 horas
            </span>
          </div>
          <div className={styles.flexContainer15}>
            <img className={styles.arrow2} src={arrow} />
            <span className={styles.info12}>
              Turmas matutinas e noturnas
            </span>
          </div>
          <div className={styles.flexContainer16}>
            <img className={styles.arrow2} src={arrow} />
              <span className={styles.info13}>
                Turmas distribuídas de acordo com o nível de conhecimento prévio
              </span>
          </div>
        </div>
        <img className={styles.decoFAQ2} src={decoFAQ2} />
      </div>
    </>
  );
};