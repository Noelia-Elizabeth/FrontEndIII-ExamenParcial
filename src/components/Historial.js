import React, { Component } from "react";

class Historial extends Component {
  render() {
    return ( //Mostramos las opciones elegidas anteriormente por el usuario.
      <>
        <h3>Selección anterior: {this.props.ultimaEleccion}</h3>
        <h4>Historial de opciones elegidas: </h4>
        <ul>{this.props.historial}</ul>
      </>
    );
  }
}

export default Historial;