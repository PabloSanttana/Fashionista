import React from 'react'


import './styles.scss'


export default function ProductCart({data,updateAmount,removeItem}) {

    return (
        
        <>
            {data.actual_price? 
                <div className='card__cart' >
                    <div className='card__cart__container__image'>
                        <img className='card__cart__image' src={data.image}  alt={data.name}/>
                        <span onClick={() =>removeItem(data.size)} className='card__cart__delet' >Remover Item</span>
                    </div>
                    <div className='card__cart__info'>
                        <h3 className='info__name'>{data.name}</h3>
                       <div style={{display:'flex', flexDirection:'column'}}>
                            <span className='info__tam'>Tam: {data.tam}</span> 
                            <span className='info__price'>{data.actual_price}</span> 
                            <span className='info__installments'>{data.installments}</span>
                       </div>
                       
                        <div className='card__cart__grup__buttons' >
                            <button onClick={() => updateAmount(data.size,(data.amount-1)) } className='card__cart__button'>-</button>
                            <span className='card__cart__amount'>{data.amount}</span>
                            <button onClick={() => updateAmount(data.size,(data.amount+1)) } className='card__cart__button'>+</button>
                        </div>
                       
                    </div>
                   
                </div>
            :null}
        
        </>
    )
}
