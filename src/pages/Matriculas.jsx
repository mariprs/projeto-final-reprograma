import { Menu }  from "../components/Menu"
import confetti from "../assets/Matriculas/confetti.svg"
import styles from "../styles/pages/matricula.module.css"
import { useState } from 'react'
import { database } from '../service/firebase'
import { ref, push, set } from 'firebase/database'


export function Matriculas() {
    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')
    const [email, setEmail] = useState('')
    const [option1, setOption1] = useState('')
    const [option2, setOption2] = useState('')

    function handleInputValueNomeMatricula(event) {
        setNome(event.target.value)
    }

    function handleInputValueIdadeMatricula(event) {
        setIdade(event.target.value)
    }

    function handleInputValueEmailMatricula(event) {
        setEmail(event.target.value)
    }

    function handleInputValueOption1Matricula(event) {
        setOption1(event.target.value)
    }

    function handleInputValueOption2Matricula(event) {
        setOption2(event.target.value)
    }

    function handleCreateMessage(event) {
        event.preventDefault()
        const messageListRef = ref(database, 'matriculas')
        const newMessageRef = push(messageListRef)
        set(newMessageRef, {
            nome: nome,
            idade: idade,
            email: email,
            iniciante: option1,
            adepto: option2
        })
    }

    return(
        <div>
          <Menu />
            <div className={styles.backgroundMatricula}>
                <img className={styles.bgMatricula} src={confetti} />
            </div>
                <div className={styles.title}>
                </div>
                <form className={styles.forms} onSubmit={handleCreateMessage}>
                <div className={styles.questions}>
                    <h3 className={styles.title}>
                        A escolha dos alunos será realizada via sorteio
                    </h3>
                    <div className={styles.questions}>
                        <div className={styles.question1}>
                            <label className={styles.label}for="nome">
                                Nome completo:
                            </label>
                            <input id="nome" className={styles.formInput} placeholder="Digite o seu nome (social) completo" onChange={handleInputValueNomeMatricula} />
                        </div>
                        <div className={styles.question2}>
                            <label className={styles.label}for="email">
                                E-mail:
                            </label>
                            <input id="email" className={styles.formInput} placeholder="Digite seu e-mail" onChange={handleInputValueEmailMatricula} />
                        </div>
                        <div className={styles.question3}>
                            <label className={styles.label}for="date">
                                Data de nascimento:
                            </label>
                            <input type="date" id="date" className={styles.formInputDate} placeholder="Digite sua idade (curso para maiores de 18 anos)" onChange={handleInputValueIdadeMatricula} />
                        </div>
                    </div>
                </div>
                <fieldset>
                    <legend>
                        Selecione qual se aplica a você (não eliminatório):
                    </legend>
                    <input type="radio" className={styles.formInputRadio} name="drone" value="iniciante"  onChange={handleInputValueOption1Matricula} checked />
                    <label for="iniciante" className={styles.opt1}>
                        Tenho dificuldade em manusear computadores
                    </label>
                    <div className={styles.radio}>
                        <input type="radio" className={styles.formInputRadio} name="drone" value="adepto" onChange={handleInputValueOption2Matricula} />
                        <label for="adepto" className={styles.opt2}>
                            Consigo realizar atividades de nível iniciante ou acima (abrir programas, acessar a internet) no computador
                        </label>
                    </div>
                    </fieldset>
                    <button type="submit" className={styles.buttonTop}>
                        Enviar
                    </button>
                     <h4 className={styles.subtitle}>
                        Obrigada por nos escolher para dar esse passo importante!
                    </h4>
                </form>   
        </div>
    )
}