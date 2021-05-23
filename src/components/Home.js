import React, {Fragment} from 'react';
import GaleriaImagenes from './GaleriaImagenes';
import UltimasNovedades from './UltimasNovedades';

const Home = (props) => {
    return ( 
        <Fragment>
 <GaleriaImagenes /> 
<div className="home my-5 container">
    <div className="text-center">
    <h2>Ultimas Novedades</h2>
    </div>
    <UltimasNovedades articulos={props.articulos}/>
</div>
        </Fragment>
       
     );
}
 
export default Home;