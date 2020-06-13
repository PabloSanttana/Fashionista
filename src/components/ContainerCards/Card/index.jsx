import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

import './styles.scss'

export default function Card({data}) {
    const mobile = useSelector(state => state.mobile.active)
    return (
       
        <div className={`Card__container ${mobile && 'opacytFull'}`}>
             <Link to={`/product/${encodeURIComponent(data.name)}`}>
                <span className='discount__percentage'>{data.discount_percentage !== ''? data.discount_percentage: null}</span>
                { data.image === ''?
                    <div className='card__image__notfound'><h3>Imagem indisponível</h3></div>
                    :

                    <img src={data.image} className='card__image' alt={data.image}/>

                }
            
                <h5 className='card__name'>{data? data.name : null}</h5>
                <div className='card__prices'>
                    { data.on_sale && <strike className='actual_price'>{data.regular_price}</strike> }
                    <span className='regular_price'>{data.actual_price}</span>
                </div>
            </Link>
        </div>
       
    )
}
