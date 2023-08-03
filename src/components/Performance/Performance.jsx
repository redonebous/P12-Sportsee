import React, { useEffect, useState } from 'react'
import useFetch from '../../data/useFetch'
import styles from './Performance.module.css'
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts'
import FormatData from '../../data/fomatData'
export default function Performance({ id }) {
    const { data, loading } = useFetch('http://127.0.0.1:3000/user/' + id + '/performance')

    const format = new FormatData(data, 'performance')
    const formated = format.getFormatedData()

    let radiusMax = 100;
    let arrayRadius = [10, 20, 40, 70, 100];
    let fontSize = "12px";

    if (window.innerWidth < 1500 && window.innerWidth > 1300) {
        radiusMax = 75;
        arrayRadius = [7.5, 15, 30, 52.5, 75];
        fontSize = "10px";
    } else if (window.innerWidth < 1300) {
        radiusMax = 50;
        arrayRadius = [5, 10, 20, 35, 50];
        fontSize = "10px";
    }

    if (loading) return <div></div>


    return (
        <div className={styles.box}>
            <ResponsiveContainer height={250} width="99%">
                <RadarChart outerRadius={radiusMax} data={data?.data}>
                    <PolarGrid stroke='#FFFFFF' radialLines={false} polarRadius={arrayRadius} />
                    <PolarRadiusAxis domain={['dataMin', 'dataMax']} axisLine={false} tick={false} />
                    <PolarAngleAxis tick={{ fill: "#FFFFFF", fontSize: fontSize, fontFamily: "Roboto", fontWeight: 400 }} dataKey="kind" />
                    <Radar dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}
