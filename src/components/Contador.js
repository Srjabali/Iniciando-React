import React, {useState, Fragment} from 'react';

const Contador = () => {

    const [numero, setNumero] = useState(0);
    
    const Aumentar = () =>{
        console.log("medistiuncli")
        setNumero(numero+1)
    }

    return ( 
        <Fragment>
            <h3>Holi {numero}</h3> 
            <button onClick={Aumentar}>Aumentar</button>
        </Fragment>
        
        );
}
 
export default Contador;