


export function calcularTotal (cantidad, plazo){

    let  guardarCantidad= 0
    if (cantidad >= 1000) {
        guardarCantidad = cantidad * .25 ;
    }
     else if (cantidad > 1000 && cantidad <=5000  ) {
        guardarCantidad = cantidad * .20 ;
    }
        else {
            guardarCantidad = cantidad *.15 ;
        } 


    
    let guardarPlazo = 0 ;

    switch(plazo) {

        case 3 :
            guardarPlazo= cantidad * .05 ;
            break ;
        case 6 :
            guardarPlazo = cantidad * .10 ;
            break;
        case 12 : 
            guardarPlazo = cantidad * .15 ;
            break;
        case 24 :
            guardarPlazo = cantidad *.20 ;        
            break;
        default :
            break ;


    } 
        let total = guardarPlazo + guardarCantidad + cantidad ;
       return  total
       
       


}







