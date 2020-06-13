

export async function addProdctRequest(data,cart){
  

   const response = await cart.findIndex(item => item.size === data.size)

   if(response === -1) return {
       new: true,
       payload: data
   }

   return {
       new: false,
       id: response,
       amount: cart[response].amount + data.amount
   }
}