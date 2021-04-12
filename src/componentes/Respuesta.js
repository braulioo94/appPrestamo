
import React  from 'react'; 


 const   Respuesta =  ({cantidad , plazo, total}) => {

    return  ( <div className = 'resultado'>

            <h3> Resumen</h3>
            <p> La cantidad solicitada es de : $ {cantidad}  </p>,
            <p> A pagar en el plazo de {plazo} meses</p>,
            <p> Cuotas de {(total / plazo).toFixed(2)}</p>, 
            <p> Siendo el total a pagar de  $ {(total).toFixed(2)}</p>
             
             </div>
    )

    



}


export default Respuesta ;