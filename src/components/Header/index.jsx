import React,{useEffect, useState} from 'react'
import {FiShoppingBag} from 'react-icons/fi'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

import './styles.scss'
import Search from '../Search'
import SearchResult from '../SearchResult'
import logo from '../../assets/img/logo.png'

export default function Header() {
        const {cart} = useSelector(state => state)
        const [total, setTotal] = useState(0)
        
        useEffect(()=>{
            var count = 0
            cart.map(item =>( count =count + item.amount))
            setTotal(count)
        },[cart])



    return (
        <>
        <div className='fixed'>
            <header id='header'>
            <div className='container header__content'>
                <Link to='/' className='header__logo'><img src={logo} style={{width:'100px'}} alt='logo'/></Link>
                <div className='header__rigth'>
                        <Search/>
                        <Link to='/gp/cart'>
                            <FiShoppingBag className='ShoppingBag' />
                            <div className='header__container__notification'>
                            <span>{total}</span> 
                            </div>
                        </Link>
                </div>
            </div>
            
            </header>
            <div className="container ">
                <SearchResult/>
            </div>
        </div>
        </>
    )
}
