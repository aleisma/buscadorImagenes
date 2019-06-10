import React, { Component } from 'react';
import '../../App.css'

class Buscador extends Component  {
    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
       e.preventDefault();
      //llemos el valor
      const termino = this.busquedaRef.current.value;
      //console.log(termino);
      this.props.datosBusqueda(termino);


    }
    render(){
    
        return(
            <form onSubmit={this.obtenerDatos}>
            <div className="row center">
                <div className="form-group col-md-8">
                    <input ref={this.busquedaRef} className="form-control form-control-lg" type="text" placeholder="Busca tu imagen, ejemplo: Futbol"/>
                </div>
                <div className="form-group col-md-4">
                <i className="glyphicon glyphicon-search"></i>  
                    <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar..."/>

                    
                  
                </div>

            </div>
            </form>

        );
    }
}
export default Buscador;