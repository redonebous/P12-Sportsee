import { useEffect, useState } from 'react'
import mockData from './mockData.js'

function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const API_MODE = true;

    useEffect(() => {
        setLoading(true)
        if (API_MODE === true) {
            console.log('api')

            fetch(url)
                .then((res) => res.json())
                .then((data) => data.data)
                .then((data) => setData(data))
                .catch((err) => setError(err))
                .finally(() => setLoading(false))


        } else {
            console.log('mock')

            let parse = url.split('/');
            let type = parse[parse.length - 1];
            let id = parse[parse.length - 2];
            let data;

            switch (type) {
                case 'activity':
                    data = mockData.USER_ACTIVITY.filter((data) => data.userId == id);
                    setData(data[0])
                    break;
                case 'average-sessions':
                    data = mockData.USER_AVERAGE_SESSIONS.filter((data) => data.userId == id);
                    setData(data[0])
                    break;
                case 'performance':
                    data = mockData.USER_PERFORMANCE.filter((data) => data.userId == id);
                    setData(data[0])
                    break;

                default:
                    data = mockData.USER_MAIN_DATA.filter((data) => data.id == type);
                    setData(data[0]);
                    break;
            }
            setLoading(false)

        }

    }, [url])


    return { data, loading, error }

}

export default useFetch