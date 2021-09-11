import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; //Importamos los estilos del archivos .css.
import App from "./App"; //Importamos el componente App.

ReactDOM.render( //Renderizamos los componenetes de React que creamos.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") //Los componentes renderizados aparecerán dentro del div con el id 'root'.
);
