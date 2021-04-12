import React,{Fragment,useState} from 'react';
import {calcularTotal} from '../helpers'
import '../index.css';



const Formulario = ({cantidad, guardarCantidad, plazo, guardarPlazo, total, guardarTotal,guardarCargando}) => {

 
//Definir state para el error
const[error, guardarError]=useState(false);



//Cuando el usuario hace submit
const calcularPrestamo= e=> {
    e.preventDefault();
    
  
    //Validar 
     if(cantidad === 0 || plazo === '') {
         guardarError(true)
     console.log('No se envio la informacíon necesaria')
     return ;
 }
    // Elimina el error previo
    guardarError(false)

    //Habilitar el Spinner  

    guardarCargando(true)

    setTimeout(() => {
        
        //Llama a la funcion que realiza el calculo
    let total = calcularTotal(cantidad , plazo)

    guardarTotal(total)

    //Deshabilitar el Spinner
        guardarCargando(false)
    }, 3000);


}
return(
    <Fragment>
    <form onSubmit={calcularPrestamo} >
            

          
         
          <div className="row">
              <div className="cuestionario">
                  <label>Cantidad Prestamo</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Ejemplo: 3000"
                       onChange= { (e) => guardarCantidad(parseInt(e.target.value))}
                  />
              </div>
              <div className="cuestionario">
                  <label> Plazo para Pagar</label>
                  <select className='asd' 
                      
                      onChange= { (e) => guardarPlazo(parseInt(e.target.value))}
                  
                      
                  >
                      <option  value="">Seleccionar</option>
                      <option  value="3">3 meses</option>
                      <option  value="6">6 meses</option>
                      <option  value="12">12 meses</option>
                      <option  value="24">24 meses</option>
                  </select>
              </div>
              <div >
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="calcular" >
                  </input>
              </div>
          </div>
         
  </form>
            

    
            {(error) ? <p className='error'>Todos los campos son obligatorios</p>   : ''}
            
  </Fragment>

)

}


export default Formulario ;


