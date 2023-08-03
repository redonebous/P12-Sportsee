class FormatData {

    traduction = {
        cardio: "Cardio",
        energy: "Energie",
        endurance: "Endurance",
        strength: "Force",
        speed: "Vitesse",
        intensity: "Intensité",
    };


    constructor(data, type) {
        this.data = data
        this.type = type
    }

    getFormatedData() {
        switch (this.type) {
            case 'main':
                this.formatMainData(this.data)
                break
            case 'activity':
                this.formatActivityData(this.data)
                break;
            case 'performance':
                this.formatPerformanceData(this.data)
                break
            case 'sessions':
                this.formatSessionData(this.data)
                break
            default:
                break;
        }

        return this.data
    }

    formatMainData(data) {
        if (data?.keyData) {
            let calorieCount = data.keyData.calorieCount.toLocaleString('en-US')
            calorieCount += 'kCal'
            let proteinCount = data.keyData.proteinCount + 'g'
            let carbohydrateCount = data.keyData.carbohydrateCount + 'g'
            let lipidCount = data.keyData.lipidCount + 'g'

            data.keyData = { ...data.keyData, calorieCount, proteinCount, carbohydrateCount, lipidCount }

        }
    }

    formatActivityData(data) {
        if (data?.sessions) {
            data.sessions.forEach((ses) => {
                let day = new Date(ses.day)

                ses.day = day.getDate()
            })
        }
    }

    formatPerformanceData(data) {
        if (data?.data) {
            data.data.forEach((perf) => {
                perf.kind = this.traduction[data.kind[perf.kind]]
            })
        }
    }

    formatSessionData(data) {
        if (data?.sessions) {
            data.sessions.forEach((ses) => {
                switch (ses.day.toString()) {
                    case '1':
                        ses.day = 'L'
                        break;
                    case '2':
                        ses.day = 'M'
                        break;
                    case '3':
                        ses.day = 'M'
                        break;
                    case '4':
                        ses.day = 'J'
                        break;
                    case '5':
                        ses.day = 'V'
                        break;
                    case '6':
                        ses.day = 'S'
                        break;
                    case '7':
                        ses.day = 'D'
                        break;
                    default:
                        break;
                }
            })
        }
    }



}

export default FormatData;