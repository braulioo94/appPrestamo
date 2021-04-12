import React, {Fragment, useState} from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario' ;
import Mensaje from './componentes/Mensaje';
import Respuesta from './componentes/Respuesta';
import Spinner from './componentes/Spinner'; 
import './index.css';



function App (){
  
   const [cantidad, guardarCantidad] = useState(0)
   const[plazo, guardarPlazo] =useState('')
   const[total, guardarTotal]=useState(0)
   const[cargando, guardarCargando]=useState(false)
  

  let componente ;

  if (cargando) {
    componente= <Spinner />
    
  }

  else if (total === 0 ){
    componente = <Mensaje />
  } 
  
  else{
    componente =<Respuesta 
                  cantidad={cantidad}
                  plazo ={plazo}
                  total={total}
                  />
  }

   
  return (
    <Fragment>
      <Header titulo='Cotizacion de prestamos' />
      
      <div className='container'>
      <Formulario 
        cantidad={cantidad}
        guardarCantidad={guardarCantidad}
        plazo={plazo}
        guardarPlazo={guardarPlazo}
        total={total}
        guardarTotal={guardarTotal}
        componente= {componente}
        guardarCargando={guardarCargando}
      />
      <div className = 'mensajes'>  

      {componente}

      </div>
      </div>

     

      </Fragment>
  );
  }

  export default App


