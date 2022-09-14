
import imagenlogo from "./imagenes/imagenlogo.png";
import './App.css';
import Button from "./Components/Button";
import Contador from "./Components/Contador";
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };

  const restarClick = () => {
    setNumClicks(numClicks - 1);
  };

  const multiplicarClick = () => {
    setNumClicks(numClicks * 2);
  };

  const dividirClick = () => {
    setNumClicks(numClicks / 2);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };


  return (
    <div className="App">
      <div className="imagen-contenedor">
        <img 
          className="imagen-logo"
          src={imagenlogo}
          alt="logo de imagen" />
      </div>

      <div className="container-main">
      
        <Contador numClicks={numClicks} />

        <Button 
          texto="Click"
          esBotonDeClick={true}
          manejarClick={manejarClick}/>

        <Button 
          texto="Restar"
          esBotonDeClick={true}
          manejarClick={restarClick}/> 

        <Button 
          texto="Multiplicar"
          esBotonDeClick={true}
          manejarClick={multiplicarClick}/>

        <Button 
          texto="Dividir"
          esBotonDeClick={true}
          manejarClick={dividirClick}/>

        <Button 
          texto="Reiniciar"
          esBotonDeClick={false}
          manejarClick={reiniciarContador}/>

            
      </div>
    </div>
  );
}

export default App;
