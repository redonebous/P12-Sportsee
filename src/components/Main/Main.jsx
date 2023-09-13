import React, { useEffect, useState } from 'react'
import styles from './Main.module.css'
import Banner from '../Banner/Banner'
import Activity from '../Activity/Activity'
import { useNavigate, useParams } from 'react-router-dom'
import useFetch from '../../data/useFetch'
import SideBar from '../SideBar/SideBar'
import FormatData from '../../data/fomatData';
import Nutriment from '../Nutriment/Nutriment'
import KPI from '../KPI/KPI'
import Performance from '../Performance/Performance'
import Objectif from '../Objectif/Objectif'


export default function Main() {

    const params = useParams()
    const navigate = useNavigate()


    const { data, loading, error } = useFetch('http://127.0.0.1:3000/user/' + params.id)



    if (loading) return <div></div>

    if (error) {

        return <div className={styles.erreur}>Une erreur est survenue lors du chargement des données...</div>

    } else {
        let format = new FormatData(data, 'main')
        let formated = format.getFormatedData()
        let nutriments
        if (formated) {
            nutriments = Object.entries(formated?.keyData)
        }

        return (
            <div className={styles.page}>
                <SideBar />
                <div className={styles.main}>
                    <Banner user={data?.userInfos} />
                    <div className={styles.info}>
                        <div className={styles.charts}>
                            <Activity id={params.id} />

                            <div className={styles.sessions}>
                                <Objectif id={params.id} />
                                <Performance id={params.id} />
                                <KPI score={data?.score || data?.todayScore} />
                            </div>

                        </div>

                        <div className={styles.nutrition}>
                            {nutriments?.map((data, k) => <Nutriment key={k} data={data} />)}
                        </div>

                    </div>
                </div>
            </div>
        )
    }


}
