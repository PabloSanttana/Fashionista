import React,{useState, useEffect} from 'react'
import {useHistory, Link} from 'react-router-dom'
import {useSelector, useDispatch} from  'react-redux'
import {FiArrowLeft,FiCheckCircle} from 'react-icons/fi'

import './styles.scss'
import imgNotFound from '../../assets/img/ProductNotFound.png'
import ButtonSizes from '../../components/ButtonSizes'
import {addProdctRequest} from '../../controllers/CartController'
import {addProduct, updateAmountSucces} from '../../store/modules/Cart/actions'
import indisponivel from '../../assets/img/indisponivel.png'

export default function ProductDetail(props) {
    const history = useHistory()
    const dispatch = useDispatch()
    const {name} = props.match.params
    const data = useSelector(state => state.products.data)
    const cart = useSelector(state => state.cart)
    const [product, setProduct] = useState([])
    const [notFound, setNotFound] = useState(false)
    const [invalide, setInvalide] = useState(false)
    const [selectedSizes, setSelectedSizes]= useState('')
    const [check, setCheck] = useState(false)

    useEffect(() =>{
        const response = data.find(item=> item.name === name)
            if(!response){
                setNotFound(true)
                
                var temp = setInterval(() => {
                    history.push('/')
                    clearInterval(temp)
                }, 3000);

                return
            }
        setProduct(response)
    },[name,data,history])
    

    function handleSelectedSize(code){
            if(code === selectedSizes){
                setSelectedSizes('')
            }else{
                setSelectedSizes(code)
            }
            
    }

    async function  hnadleSubmit(){
       if(selectedSizes === ''){
            return setInvalide(true)
       }

       const data = {
           name: product.name,
           amount: 1,
           size: selectedSizes

       }

      const response = await addProdctRequest(data,cart)

       if(response.new){
            handleCheck()
            dispatch(addProduct(response.payload))
            
            return;
       }else{
            handleCheck()
            dispatch(updateAmountSucces(response))
            
            return
       }

    }

    function handleCheck(){
     
        setCheck(true)
        var temp = setInterval(() => {
            setCheck(false)
            clearInterval(temp)
        }, 500);   
    }
    
    return (
        <div className='container'>
            {notFound ?
                <div className='product__not__found'>
                    <h1>Produto não encontrado.</h1>
                    <h2>Você está sendo redirecionado para página principal</h2>
                    <img src={imgNotFound} alt="not found"/>
                </div>
                :
                <div className='product__container'>
                        <Link to='/' className='go__back'><FiArrowLeft/></Link>
                        <div className='product__image__container'>
                            <span className='product__discount__percentage' >{product.discount_percentage !== ''? product.discount_percentage: null}</span>
                          {product.image !== ''?  <img className='product__image' src={product.image} alt=""/>
                          : 
                          <img className='product__image' src={indisponivel} alt="not found"/>
                          } 
                            
                        </div>
                      
                        <div className='product__info'>
                            <h1 className='product__info__name'>{product.name}</h1>
                            <div className='product__prices' >
                            {product.on_sale && <strike className='products__actual__price'>{product.regular_price}</strike> }
                                 <span className='products__regular__price'>{product.actual_price}</span>
                            </div>
                            <p className='products__installments'>em até {product.installments}</p>

                            <span className='products__text__sizes'>Escolha o tamanho</span>
                            {(invalide && selectedSizes.length === 0 ) ? <span className='invalideSubmit'>É necessário escolher um tamanho.</span>:null}
                            <div className='products__sizes'>
                               
                                { product.sizes && product.sizes.map(item=> (
                                    
                                    <ButtonSizes 
                                        key={item.sku} 
                                        handleSelectedSize={handleSelectedSize} 
                                        isAcitve={selectedSizes === item.sku? true: false}  
                                        data={item}
                                    />
                                
                                ))}
                            </div>

                            <button onClick={hnadleSubmit} className='products__add'>Adicionar à Sacola</button>
                            
                        {check &&   <div  id='bnt' className={`product__Addsucess ${check && 'check'}`}>
                                       <FiCheckCircle />
                                    </div>
                        }    
                               
                        </div>

                       
                </div>
            }

           
        </div>
    )
}
