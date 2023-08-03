import React from 'react'
import styles from './SideBar.module.css'

export default function SideBar() {

    const list = [<i className="fa-solid fa-person-praying"></i>, <i className="fa-solid fa-person-swimming"></i>, <i className="fa-solid fa-person-biking"></i>, <i className="fa-solid fa-dumbbell"></i>]

    return (
        <div className={styles.sideBar}>
            {list.map((icon, k) => <span key={k} className={styles.icon}>{icon}</span>)}
            <span className={styles.copyright}>Copiryght, SportSee 2020</span>
        </div>
    )
}
