import { useState, useEffect } from 'react'
import { Menu }  from "../components/Menu"
import styles from "../styles/pages/voluntariosSlide.module.css"
import axios from 'axios'
    
                    
export function VoluntariosSlide() {
    const [volunteers, setVolunteers] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const {data} = await axios.get(
            "https://random-data-api.com/api/users/random_user?size=3&is_json=true") 
    setVolunteers(data)
}
return(
                    <>
                        <Menu />
                        <div className={styles.bigRow}>
                            {volunteers.map(volunteer => (
                                <div className={styles.row}>
                        <img key={volunteer.avatar} src={volunteer.avatar} className={styles.linkApi} />
                        <h1 key={volunteer.first_name} className={styles.columnTitle}>{volunteer.first_name} {volunteer.last_name}</h1>
                     </div>))
                     } </div>      
                    </>
                    )
}
                