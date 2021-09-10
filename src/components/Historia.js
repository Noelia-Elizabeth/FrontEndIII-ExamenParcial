import React from "react";
import data from "./data.json";
import Botones from "./Botones";
import Historial from "./Historial";

const historial = [];

class Historia extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          contador: 0,
          seleccionPrevia: "",
        };
      }
    
      componentDidUpdate(prevProps, prevState) {
        if (prevState.contador !== this.state.contador) {
          historial.push(this.state.seleccionPrevia);
        }
      }
    
      handleClick = (e) => {
        const id = e.target.id;
        if (this.state.contador >= 7) {
          alert("Fin.");
        } else if (id === "A" && this.state.seleccionPrevia !== "A") {
          this.setState({
            contador: this.state.contador + 1,
            seleccionPrevia: "A",
          });
        } else if (id === "A" && this.state.seleccionPrevia === "A") {
          this.setState({
            contador: this.state.contador + 2,
          });
        } else if (id === "B" && this.state.seleccionPrevia === "A") {
          this.setState({
            contador: this.state.contador + 3,
            seleccionPrevia: "B",
          });
        } else if (id === "B") {
          this.setState({
            contador: this.state.contador + 2,
            seleccionPrevia: "B",
          });
        }
        console.log(historial);
      };
    
      render() {
        return (
          <div className="layout">
            <h1 className="historia">{data[this.state.contador].historia}</h1>
            <Botones
              handleClick={this.handleClick}
              opcionA={data[this.state.contador].opciones.a}
              opcionB={data[this.state.contador].opciones.b}
            />
            {<Historial
              seleccionPrevia={this.state.seleccionPrevia}
              historial={historial.map(
                (e, index) => (
                  <li key={index}>{e}</li>
                ),
                data[this.state.contador].id
              )}
            />}
          </div>
        );
      }
}

export default Historia;