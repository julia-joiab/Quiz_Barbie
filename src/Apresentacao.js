import Quiz from "./Quiz.js";

const Apresentacao = ( props ) => {

    require ("./Apresentacao.css")

    const alteraTela = props.alteraTela;

    return ( 

        <div className="telaP">

            <h1 className="titulo"> Boas vindas ao Quiz da Barbie! </h1>

            <img width="450px" src="https://i.imgur.com/9t6FRtJ.jpg" ></img>

            <p> Descubra de qual filme da Barbie você faria parte... </p>

            <button className="botao" onClick={ ()=> props.alteraTela( <Quiz alteraTela={alteraTela} /> ) } > INICIAR </button>

        </div>

    );
};
export default Apresentacao;