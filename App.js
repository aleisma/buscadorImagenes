import React, { Component } from 'react';
import Header from './componentes/header/Header';
import Buscador from './componentes/buscador/Buscador';
import Resultado from './componentes/resultado/Resultado';
import './App.css';



class App extends Component{
  state = {
    termino: '',
    imagenes: [],
    pagina:'',
    cargando: false
  }
  consultarAPI = async () =>{
    const termino = this.state.termino;
    const pagina= this.state.pagina;
    const url = `https://pixabay.com/api/?key=11934842-c044272359796414e6a4f9989&q=${termino}&per_page=100&page=${pagina}`;
    console.log(url)
   

    await fetch(url)
    .then(respuesta => {
      this.setState({
        cargando:true
      })
      return respuesta.json()
    } )
    .then(resultado => {
      this.setState({ 
        imagenes : resultado.hits,
        cargando : false
      }) 
    })
}

  datosBusqueda = (termino) => {
    this.setState({
      termino: termino,
      pagina: 1
    }, ()=> {
      this.consultarAPI();
    })

  }
  paginaAnterior = () => {
    let pagina = this.state.pagina;
    if(pagina === 1) return null;
    pagina --;
    this.setState({
      pagina
    }, () =>{
      this.consultarAPI();
      this.scroll();
    } );


  }
  paginaSiguiente = () => {
   let pagina = this.state.pagina;
   pagina ++;
   //agregar al state
   this.setState({
     pagina
   }, () => {
     this.consultarAPI();
     this.scroll();
   });
  
  }
  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('auto', 'start');
  }
  render(){
    const cargando = this.state.cargando;
    let resultado;
    if(cargando){
      resultado = <div className="sk-circle">
                  <div className="sk-circle1 sk-child"></div>
                  <div className="sk-circle2 sk-child"></div>
                  <div className="sk-circle3 sk-child"></div>
                  <div className="sk-circle4 sk-child"></div>
                  <div className="sk-circle5 sk-child"></div>
                  <div className="sk-circle6 sk-child"></div>
                  <div className="sk-circle7 sk-child"></div>
                  <div className="sk-circle8 sk-child"></div>
                  <div className="sk-circle9 sk-child"></div>
                  <div className="sk-circle10 sk-child"></div>
                  <div className="sk-circle11 sk-child"></div>
                  <div className="sk-circle12 sk-child"></div>
    </div>

    }
    else{
      resultado = <Resultado
                  imagenes={this.state.imagenes}
                  paginaAnterior={this.paginaAnterior}
                  paginaSiguiente={this.paginaSiguiente}
      />

    }
  return (
    <div className="app container">
      <Header/>
      <Buscador
        datosBusqueda={this.datosBusqueda}
        />
     <div className="row justify-content-center">
       
        {resultado}
     </div>
      
    </div>
  );
 }
}

export default App;


