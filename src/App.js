import React, { useState } from 'react';
import Apresentacao from "./Apresentacao.js";

function App() {

    require ("./App.css")

    const [ tela, alteraTela ] = React.useState( null );

    if( tela == null ){
        alteraTela( <Apresentacao alteraTela={alteraTela} /> )
    }

    return (

        <div>

            { tela }

        </div>
  );
}
export default App;