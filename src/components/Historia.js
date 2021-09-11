import React from "react";
import data from "./data.json"; //Importamos la información que tenemos en el archivo .json.
import Botones from "./Botones"; //Importamos el componente de los botones.
import Historial from "./Historial"; //Importamos el componente del historial.

const historial = []; //Declaramos un array vacio.

class Historia extends React.Component {
    constructor(props) { //Constructor.
        super(props);
        this.state = {
          contador: 0, //Creamos un contador.
          ultimaEleccion: "", //Aquí guardaremos la última elección del usuario.
        };
      }
    
      componentDidUpdate(prevState) {
        if (this.state.contador !== prevState.contador) {
          historial.push(this.state.ultimaEleccion); //Guardamos en un array la última elección del usuario.
        }
      }
    
      handleClick = (element) => {
        const id = element.target.id;
        if (this.state.contador >= 7) { //En caso de que ya se haya recorrido toda la historia, se muestra una alerta en el navegador.
          alert("Fin de la historia, gracias por participar. 🤓");
        } else if ((id === "A") && (this.state.ultimaEleccion !== "A")) {
          this.setState({
            contador: this.state.contador++, //Aumenta el contador.
            ultimaEleccion: id, //Guardamos la última elección del usuario.
          });
        } else if (((id === "A") && (this.state.ultimaEleccion === "A")) || (id === "B")) {
          this.setState({
            contador: this.state.contador + 2, //Aumenta el contador.
            ultimaEleccion: id, //Guardamos la última elección del usuario.
          });
        } else if ((id === "B") && (this.state.ultimaEleccion === "A")) {
          this.setState({
            contador: this.state.contador + 3, //Aumenta el contador.
            ultimaEleccion: id, //Guardamos la última elección del usuario.
          });
        }
      };
    
      render() {
        return ( //Insertamos tanto el componenete de los botones como el componenete del historial del usuario. 
          <div className="layout">
            <h1 className="historia">{data[this.state.contador].historia}</h1>
            <div className="opciones">
              <Botones
                handleClick={this.handleClick}
                opcionA={data[this.state.contador].opciones.a}
                opcionB={data[this.state.contador].opciones.b}
              />
            </div>
            <div className="recordatorio">
              <Historial
                ultimaEleccion={this.state.ultimaEleccion}
                historial={historial.map(
                  (element, i) => (
                    <li key={i}>{element}</li>
                  ),
                  data[this.state.contador].id
                )}
              />
            </div>
          </div>
        );
      }
}

export default Historia;