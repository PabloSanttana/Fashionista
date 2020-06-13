import React,{useEffect, useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'

import './styles.scss'
import {searchClearText} from '../../store/modules/Search/actions'
import ResultProducts from './ResultProducts'
import ProductNotFound from '../../assets/img/ProductNotFound.png'

export default function SearchResult() {
    const dispatch = useDispatch()
    const search = useSelector(state=> state.search.text)
    const data_all = useSelector(state=> state.products.data)
    const [data, setData] = useState(data_all)
    const  myHeight = document.body.clientHeight;

    useEffect(()=>{
        function onChangeSearch(e){
            setData(data_all.filter(c => c.name.toLowerCase().includes(e.toLowerCase())))
         }
         onChangeSearch(search)
    },[search,data_all])

    function closerSearchResult(){
        dispatch(searchClearText())
    }
    return (
        <>
            {search !== '' &&
                <>
                    <div onClick={closerSearchResult} style={{height: `${myHeight-60}px` }} className={`background__opacity search__result__active `}/>

                    <div className='search__result'>
                      {/*  <span >Buscando: {search}</span>  */}
                        { data.length !== 0 ? data.map((item, index)=>(
                            <ResultProducts key={index}  data={item}/>
                        ))
                        :
                        <div className='search__container__notfound'>
                            <img className='image__not__found' src={ProductNotFound} alt="not found"/>
                            <p>Produto não encontrado.</p>
                        </div>
                        
                        }
                    </div>
                </>
            }
        
        </>
    )
}
