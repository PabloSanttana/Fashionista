import React from 'react'
import {FiSearch,} from 'react-icons/fi'
import {useDispatch, useSelector} from 'react-redux'

import './styles.scss'
import {searchText} from '../../store/modules/Search/actions'

export default function Search() {
    const dispatch = useDispatch()
    const search = useSelector(state => state.search.text)

    function handleSearchText(text){
        dispatch(searchText(text.target.value))
    }
   
    return (
        
        <div className="search__container">
            <input value={search} onChange={handleSearchText} type="text" name="search"  autoCorrect='false' className={`search__text ${search !== ''&& 'active' }` } placeholder="Buscar..."/>
            <span className="search__Button">
                <FiSearch  className='search__icon'/>
            
            </span>
       </div>
     
    )
}
