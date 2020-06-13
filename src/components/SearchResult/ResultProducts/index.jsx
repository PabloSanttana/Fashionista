import React from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import './styles.scss'
import {searchClearText}  from '../../../store/modules/Search/actions'

export default function ResultProducts({data}) {
    const history = useHistory()
    const dispatch = useDispatch()

    function handleNavigationToDetail(){
        dispatch(searchClearText())
        history.push(`/product/${encodeURIComponent(data.name)}`)
    }

    return (
        <div onClick={handleNavigationToDetail} className='search__products__container'>
            <span className='search__products_discount' >{data.discount_percentage !== ''? data.discount_percentage: null}</span>
         {data.image !== ''? <img className='search__products__image' src={data.image} alt={data.name}/> 
            :
           <div className='search__products__image__notfound'> <h3>Imagem indisponível</h3></div>
        }  
           <div className='search__products__content' >
                <h3>{data.name}</h3>
                <div className='search__products__prices'>
                    {data.on_sale && <strike className='search__products__actual__price'>{data.regular_price}</strike> }
                    <span className='search__products__regular__price'>{data.actual_price}</span>
                </div>
               
                <p className='search__products__installments'  >{data.installments}</p>
           </div>
        </div>
    )
}
