import React from 'react'
import styles from './Banner.module.css'

export default function Banner({ user }) {

    return (
        <div className={styles.banner}>
            <span className={styles.title}>Bonjour <strong>{user?.firstName ? user?.firstName : 'Thomas'}</strong></span>
            <span className={styles.status}>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
        </div>
    )
}
