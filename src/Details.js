import {useEffect, useState, useRef} from "react";

const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/'

export default function Details({id}) {
    const [obj, setObj] = useState(undefined)
    const load = useRef(false)

    useEffect(() => {
        if (id === '0') {
            return
        }
        fetch(url + id + '.json')
            .then(response => response.json())
            .then(data => {
                load.current = false
                setObj(data)
            })
        load.current = true
        setObj(undefined)
    }, [id])


    if (obj === undefined && !load.current) {
        return <></>
    }

    if (load.current) {
        return (
            <div className={'details'}>
                <div className="preloader">
                    <div className="preloader__row">
                        <div className="preloader__item"></div>
                        <div className="preloader__item"></div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className={'details'}>
            <img alt={obj.name} className={'detail-image'} src={obj.avatar}/>
            <div className={'detail details-name'}>
                {obj.name}
            </div>
            <div className={'detail details-city'}>
                City: {obj.details.city}
            </div>
            <div className={'detail details-company'}>
                Company: {obj.details.company}
            </div>
            <div className={'detail details-position'}>
                Position: {obj.details.position}
            </div>
        </div>
    )
}