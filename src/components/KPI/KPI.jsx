import React from 'react'
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts'
import styles from './KPI.module.css'

export default function KPI({ score }) {

    const data = [{ name: 'score', value: score, fill: "#FF0000" }]
    let scoreNum

    if (score) scoreNum = score * 100 + "%"



    if (!score) return <div></div>

    return (
        <div className={styles.box}>
            <span>Score</span>
            <p className={styles.score}><strong>{scoreNum}</strong>de votre <br />objectif</p>
            <ResponsiveContainer height={250} width="100%">
                <RadialBarChart
                    innerRadius="70%"
                    outerRadius="80%"
                    data={data}
                    startAngle={90}
                    endAngle={90 + 450 * score}
                    cx="50%"
                    cy="50%"
                >
                    <RadialBar dataKey="value" cornerRadius={10} />

                </RadialBarChart>

            </ResponsiveContainer>



        </div>
    )
}
