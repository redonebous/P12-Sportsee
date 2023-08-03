import React from 'react'
import styles from './Header.module.css'
import img from '../../images/sport_see_logo.png'

export default function Header() {
    return (
        <div className={styles.header}>
            <img src={img} alt="Sport See logo" className={styles.logo} />
            <nav className={styles.nav}>
                <a href="#">Acceuil</a>
                <a href="#">Profil</a>
                <a href="#">Réglage</a>
                <a href="#">Communauté</a>
            </nav>
        </div>
    )
}
