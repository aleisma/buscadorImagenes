import React, { Component } from 'react';
import Imagen from '../imagen/Imagen';
import Navegacion from '../navegacion/Navegacion';

class  Resultado  extends Component {
    mostrarImagenes = () => {
        
        const imagenes = this.props.imagenes;
        if(imagenes.length === 0 ) return null;
        console.log(this.props.imagenes);

        return(
            <React.Fragment>
                <div id="resultado" className="col-12 p-5 row">
                    {this.props.imagenes.map(imagen => (
                        <Imagen
                        key={imagen.id}
                        imagen={imagen}
                        />
                    ))}

                </div>
                <Navegacion
                 paginaAnterior={this.props.paginaAnterior}
                 paginaSiguiente={this.props.paginaSiguiente}
                
                />
            </React.Fragment>
        )
    }
    render(){
        return(
            <React.Fragment>
                { this.mostrarImagenes() }
            </React.Fragment>
        );
    }
}
export default Resultado ;