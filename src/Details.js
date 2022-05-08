import {useEffect, useState} from "react";

const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/'

export default function Details({id}) {
    const [obj, setObj] = useState(undefined)

    useEffect(() => {
        if (id === '0') {
            return
        }
        fetch(url + id + '.json')
            .then(response => response.json())
            .then(data => setObj(data))
    }, [id])

    return (
        obj &&
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