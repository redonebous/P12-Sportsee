import React from 'react'
import styles from './Objectif.module.css'
import useFetch from '../../data/useFetch'
import { ResponsiveContainer, LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, Text } from 'recharts'
import FormatData from '../../data/fomatData'

const CustomToolTip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className={styles.tooltip}>
                <p>{`${payload[0].value} min`}</p>
            </div>
        );
    }
}

export default function Objectif({ id }) {
    const { data, loading } = useFetch('http://127.0.0.1:3000/user/' + id + '/average-sessions')

    if (loading) return <div></div>

    //console.log(data)

    const format = new FormatData(data, 'sessions')
    const formated = format.getFormatedData()






    return (
        <div className={styles.box}>
            <span>Durée moyenne des sessions</span>
            <ResponsiveContainer width="99%" height={250}>
                <LineChart data={data?.sessions}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <Text />
                    <CartesianGrid vertical={false} horizontal={false} />
                    <YAxis dataKey="sessionLength" hide={true} domain={['dataMin - 20', 'dataMax + 50']} />
                    <XAxis dataKey="day" axisLine={false} tick={{ fontFamily: 'Roboto', fill: '#FFFFFF', opacity: '0.7' }} tickLine={false} />
                    <Line
                        dataKey='sessionLength'
                        type='natural'
                        dot={false}
                        stroke="#FFFFFF"
                        strokeWidth={2}
                        activeDot={{ fill: 'white', stroke: 'rgba(255,255,255,0.3)', strokeWidth: 10, r: 5 }}
                    />
                    <Tooltip content={<CustomToolTip />} />

                </LineChart>

            </ResponsiveContainer>
        </div>
    )


}


/* const traduction = {
    cardio: "Cardio",
    energy: "Energie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  };
  
*/
