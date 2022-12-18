import { Menu }  from "../components/Menu"
import background from "../assets/Contact/codeBg.jpeg"
import styles from "../styles/pages/contact.module.css"
import { useState } from 'react'
import { database } from '../service/firebase'
import { ref, push, set } from 'firebase/database'


export function Contato() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMsg] = useState('')

    function handleInputValueNomeContact(event) {
        setNome(event.target.value)
    }

    function handleInputValueEmailContact(event) {
        setEmail(event.target.value)
    }

    function handleInputValueMsgContact(event) {
        setMsg(event.target.value)
      }
    function handleCreateMessage(event) {
        event.preventDefault()
        const messageListRef = ref(database, 'contatos')
        const newMessageRef = push(messageListRef)
        set(newMessageRef, {
            nome: nome,
            email: email,
            mensagem: mensagem
          })
        }

    return(
        <div>
          <Menu />
            <div className={styles.backgroundContact}>
                <img className={styles.codeBg} src={background} />
            </div>
                <form className={styles.forms} onSubmit={handleCreateMessage}>
                <div className={styles.questions}>
                    <div className={styles.questions}>
                        <input className={styles.formInput} placeholder="Seu nome (social) completo" onChange={handleInputValueNomeContact} />
                        <input className={styles.formInput} type="email" placeholder="Seu e-mail" onChange={handleInputValueEmailContact} />
                        <textarea className={styles.formText} placeholder="Escreva a sua mensagem" onChange={handleInputValueMsgContact} />
                    </div>
                </div>
                    <a href="/contato" target="_blank">
                        <button type="submit" className={styles.buttonTop}>
                            Enviar
                        </button>
                    </a>
                </form>
        </div> 
    )
} 
