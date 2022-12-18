import { useState,  } from 'react'
import { Menu }  from "../components/Menu"
import vector1 from "../assets/Voluntarios/vector1.svg"
import vector2 from "../assets/Voluntarios/vector2.svg"
import styles from "../styles/pages/voluntarios.module.css"
import { Link } from "react-router-dom"
import { database } from '../service/firebase'
import { ref, push, set } from 'firebase/database'


export function Voluntarios() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [linkedin, setLinkedin] = useState('')

    function handleInputValueNome(event) {
        setNome(event.target.value)
    }

    function handleInputValueEmail(event) {
        setEmail(event.target.value)
    }

    function handleInputValueLinkedin(event) {
        setLinkedin(event.target.value)
    }

    function handleCreateMessage(event) {
        event.preventDefault()
        const messageListRef = ref(database, 'mensagens')
        const newMessageRef = push(messageListRef)
        set(newMessageRef, {
            nome: nome,
            email: email,
            linkedin: linkedin
        })
    }

    return(
        <div>
            <Menu />
                <div className={styles.backgroundDeco}>
                    <img className={styles.bgImg1} src={vector1} />
                    <img className={styles.bgImg2} src={vector2} />
                </div> 
                <div className={styles.title}>
                    <h1 className={styles.volunteerTitle}>
                        Se apaixonou por nossos valores?
                    </h1>
                </div>
                <div className={styles.subtitle}>
                    <h3 className={styles.volunteerSubtitle}>
                        Se torne uma pessoa voluntária!
                    </h3>
                    <h3 className={styles.volunteerSubtitle2}>
                        Aceitamos pessoas de diversas áreas
                    </h3>
                </div>
               <form className={styles.forms} onSubmit={handleCreateMessage}>
                    <input className={styles.formInput} placeholder="Digite o seu nome (social) completo" onChange={handleInputValueNome} />
                    <input className={styles.formInput} placeholder="Digite seu e-mail" type="email" onChange={handleInputValueEmail} />
                    <input className={styles.formInput} placeholder="Insira seu perfil do Linkedin" type="url" onChange={handleInputValueLinkedin} />
                    <button type="submit" className={styles.buttonTop}>
                        Enviar
                    </button>
                </form>
                <div className={styles.buttonVoluntariosSlide}>
                    <Link to='VoluntariosSlide' > 
                        <button className={styles.teamButton}>
                            Clique aqui e conheça o nosso time
                        </button>
                    </Link>
                </div>
        </div>    
    )
}