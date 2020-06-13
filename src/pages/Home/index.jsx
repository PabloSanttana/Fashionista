import React,{useState, useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { debounce } from 'lodash';

import ContainerCadrs from '../../components/ContainerCards'
import {productsData} from '../../store/modules/Products/actions'
import {isMobileOFF, isMobileON} from '../../store/modules/Mobile/actions'
import './styles.scss'
import loadingGif from '../../assets/img/loading.gif'

export default function Home() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
   

    useEffect(()=>{
        fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog',{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'method': 'GET',
        })
        .then(response => response.json())
        .then(response => {
            setData(response)
            dispatch(productsData(response))
            setLoading(false)
        })
        .catch(error =>{
            console.log(error)
        })
    },[dispatch])

    useEffect(()=>{
        window.addEventListener('resize', debounce(onResizeHandler, 250));

        return () => {
            window.removeEventListener('resize',  debounce(onResizeHandler));
        }
       // eslint-disable-next-line
    },[])

    function onResizeHandler () {
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
               /*  console.log('Dispositivo Movel'); */
                dispatch(isMobileON())
                return;
            }else{
               /*  console.log('Não dispositivo movel') */
                dispatch(isMobileOFF())
                return;
            }
    }


    return (
        <div className='container'>
            {loading?  <img className='loading' src={loadingGif} alt=""/>
             :  <ContainerCadrs data={data} /> }
           
            
        </div>
    )
}
