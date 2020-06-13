import React from 'react'

import Card from './Card'
import './styles.scss'

export default function ContainerCards({data}) {
    return (
        <div className='cards'>
            <h3 className='result'> Resultados: {data? data.length: null}</h3> 
            <div className='cards__container'>
                {data? data.map((item, index) =>(
                    <Card  key={index} data={item}/>
                )):null}
           </div>
        </div>
    )
}
