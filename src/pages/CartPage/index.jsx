import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import ProductCart from '../../components/ProductCart'
import './styles.scss'
import {updateAmountSucces,removeProduct} from '../../store/modules/Cart/actions'


export default function CartPage() {
    const dispatch = useDispatch()
    const data  = useSelector(state => state.products.data)
    const cart  = useSelector(state => state.cart)
    const [subTotal, setSubTotal] = useState(0)
    const [totalItem, setTotalItem] = useState(0)

    useEffect(()=>{
       let count = 0.0
       let items = 0
       if(cart.length === 0){
           setSubTotal(0)
       }
        for (let index = 0; index < cart.length; index++) {

            const {actual_price}= data.find(product => product.name === cart[index].name)
            const [ , price] = actual_price.split(' ')
            const priceFloat = cart[index].amount * parseFloat(price.replace(',','.'))
            count = count + priceFloat
            if(index === cart.length -1) {
                setSubTotal(count.toFixed(2))
            }
            items = items +  cart[index].amount
        }
        setTotalItem(items)
    },[cart,data])




    function renderItem(item){

        const {actual_price, image, installments }= data.find(product => product.name === item.name)
        const [ , , ,tam] = item.size.split('_') 
        

        const dataItem ={
            ...item,
            actual_price,
            image,
            installments,
            tam
        }
        return( <ProductCart data={dataItem} updateAmount={handleUpdateAmount} removeItem={handleRemoveProduct}  key={item.size}/>)

    }

    function handleUpdateAmount(size, amount){
        if(amount === 0) return

        const id = cart.findIndex(item => item.size === size)

        if( id === -1) return

        const data ={
            id,
            amount:amount
        }
        dispatch(updateAmountSucces(data))
    }

    function handleRemoveProduct(size){

        dispatch(removeProduct(size))

    }

    function formatarMoeda(value) {
        if(value === 0){
            return 0
        }
        var current = String(value)

        const [c,d] = current.split('.')
       
        if(c.length >= 4){
           var str = c.slice(-3)
           var strs = c.slice(0,-3)
            return  `${strs}.${str},${d}`
        }
        return `${c},${d}`
        
    }


    return (
        <div className='container cart__container'>
           <div className='cart__products'>
                <h2 className='cart__products__title'>Carrinho de compras</h2>
                {cart.length > 0 ?  
                    cart.map((item)=> renderItem(item) )
                    :
                    <h4 style={{marginTop:'40px', textAlign:'center'}}>Não tem produtos no carrinho.</h4>
                }
           </div>
           <div className='cart__subtotal'>
                <h2>Revisão</h2>
                <div className='cart__subtotal__info'>
                    <div>
                    <span>Total de Items: <strong>{totalItem}</strong> </span>
                    <h3> SubTotal R$: {formatarMoeda(subTotal)}</h3>
                    </div>
                    <button>Comprar</button>
                </div>
           </div>
        </div>
    )
}
