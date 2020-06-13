import React from 'react'

import './styles.scss'

export default function ButtonSizes({data, handleSelectedSize, isAcitve}) {

    function toggleClass(){
        handleSelectedSize(data.sku)
    }

    return (
        <>
        {data.available &&
             <div onClick={toggleClass} className={`button__product__size ${isAcitve && 'button__product__size__active'}`}>
                <span>{data.size}</span>
            </div>
        }
        </>
       
    )
}
