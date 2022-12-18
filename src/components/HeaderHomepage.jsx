import styles from '../styles/components/header.module.css'

export function Header(props){
    return(
     <div className={styles.headerContainer}>
        <button className={styles.headerTitle}>{props.button}</button>
        <h2 className={styles.headerTitleTwo}>{props.subtitle}</h2>
        <img className={styles.headerImageOne} src={props.image} />
     </div>   
    )
}