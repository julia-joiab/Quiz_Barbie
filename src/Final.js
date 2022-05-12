import Apresentacao from "./Apresentacao.js";

const Final = ( props ) => {

    require("./Final.css")

    const alteraTela = props.alteraTela;

    return ( 

        <div className="final">

            <h1 className="h1"> Parabéns </h1>
            <p> Você terminou o Quiz! </p>
            <button className="botao" onClick={ ()=> props.alteraTela(<Apresentacao alteraTela={alteraTela} />)} > Recomeçar </button>

        </div>

    );
}
 
export default Final;