import React, { useCallback, useState } from 'react'
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts'
import useFetch from '../../data/useFetch'
import styles from './Activity.module.css'
import FormatData from '../../data/fomatData';

const CustomToolTip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className={styles.tooltip}>
                <p>{`${payload[0].value}${payload[0].name === 'kilogram' ? 'kg' : 'Kcal'}`}</p>
                <p>{`${payload[1].value}${payload[1].name === 'kilogram' ? 'kg' : 'Kcal'}`}</p>
            </div>
        );
    }
}

const CustomLegend = ({ payload }) => {
    if (payload && payload.length) {
        return (
            <div className={styles.legend}>
                <span>Activité journalière</span>
                <ul>
                    {
                        payload.map((entry, index) => (
                            <li key={`item-${index}`}>{entry.value === 'kilogram' ? 'Poids (kg)' : 'Calories brulées (kCal)'}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default function Activity({ id }) {

    const { data, loading } = useFetch('http://127.0.0.1:3000/user/' + id + '/activity');

    //console.log(data)

    let format = new FormatData(data, 'activity')
    let formated = format.getFormatedData()


    if (loading) return <div></div>

    return (
        <div style={{ height: "320px", width: "100%" }} className={styles.activity}>
            <ResponsiveContainer width="100%" height={320}>
                <BarChart data={data?.sessions} margin={{ top: 0, right: 40, left: 40, bottom: 20 }} barSize={6} barGap={8}>
                    <CartesianGrid strokeDasharray="3 3" fill='#FBFBFB' vertical='' viewBox='' />
                    <XAxis dataKey="day" tickMargin={20} tickSize={0} tickLine='' axisLine='' fontFamily='Roboto' />
                    <YAxis dataKey="kilogram"
                        yAxisId='right'
                        orientation='right'
                        domain={['dataMin - 2', 'dataMax + 2']}
                        tickMargin={40}
                        tickSize={0}
                        tickLine=''
                        axisLine=''
                        fontSize={14}
                        fontWeight={500}
                        fontFamily='Roboto'
                    />
                    <YAxis dataKey="calories" yAxisId='left' orientation='left' hide='true' domain={['dataMin - 50', 'dataMax + 50']} />
                    <Tooltip content={<CustomToolTip />} />
                    <Legend content={<CustomLegend />} verticalAlign='top' height={100} />
                    <Bar dataKey="kilogram" yAxisId='right' fill="#282D30" radius={20} />
                    <Bar dataKey="calories" yAxisId='left' fill="#E60000" radius={20} />
                </BarChart>

            </ResponsiveContainer>


        </div>

    )
}

// iconType='circle' verticalAlign='top' align='right' width={180}

//content={<CustomLegend />} verticalAlign='top' height={100}