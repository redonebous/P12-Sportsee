import { useEffect, useState } from 'react'
import mockData from './mockData.js'

function useFetch(url) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const API_MODE = true;

    useEffect(() => {
        setLoading(true)
        if (API_MODE === true) {
            console.log('api')

            fetch(url)
                .then((res) => res.json())
                .then((data) => data.data)
                .then((data) => {
                    if (data) {
                        setData(data)
                    } else {
                        throw new Error()
                    }
                }
                )
                .catch((err) => setError(true))
                .finally(() => setLoading(false))


        } else {
            console.log('mock')

            let parse = url.split('/');
            let type = parse[parse.length - 1];
            let id = parse[parse.length - 2];
            let mock;

            switch (type) {
                case 'activity':
                    mock = mockData.USER_ACTIVITY.filter((d) => d.userId == id);
                    break;
                case 'average-sessions':
                    mock = mockData.USER_AVERAGE_SESSIONS.filter((d) => d.userId == id);
                    break;
                case 'performance':
                    mock = mockData.USER_PERFORMANCE.filter((d) => d.userId == id);
                    break;

                default:
                    mock = mockData.USER_MAIN_DATA.filter((d) => d.id == type);
                    break;
            }

            if (mock.length == 0) {
                setError(true);
            } else {

                setData({ ...mock[0] });
            }


            setLoading(false)

        }

    }, [url, API_MODE])


    return { data, loading, error }

}

export default useFetch