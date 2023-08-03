import React from 'react'
import styles from './Nutriment.module.css'

export default function Nutriment({ data }) {
    let icon
    let legend

    switch (data[0]) {
        case "calorieCount":
            icon = "fa-solid fa-fire " + styles.calorie
            legend = "Calories"
            break;
        case "proteinCount":
            icon = "fa-solid fa-drumstick-bite " + styles.protein
            legend = "Proteines"
            break;
        case "carbohydrateCount":
            icon = "fa-solid fa-apple-whole " + styles.carbo
            legend = "Glucides"
            break;
        case "lipidCount":
            icon = "fa-solid fa-burger " + styles.lipid
            legend = "Lipides"
            break;
        default:
            break;
    }


    return (
        <div className={styles.nutriment}>
            <div>
                <i className={icon}></i>
            </div>
            <p>
                <span>{data[1]}</span>
                <span>{legend}</span>
            </p>

        </div>
    )
}
