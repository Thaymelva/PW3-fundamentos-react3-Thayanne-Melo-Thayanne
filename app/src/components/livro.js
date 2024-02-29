function Livro({dadosJSON}){
    return(
       <>
       {
            dadosJSON.map((livro) =>(
                <div className='cardBook'>
                    <h3>{livro.titulo}</h3>
                    <p>{livro.autor}</p>
                    <img src={livro.imagem} width={150} alt='Capa do livroas cavernas de aço de Issac Asmiov'></img>
                    <p> 
                        {livro.descricao}
                        
                    </p>
                </div>
                ))
    }
       </>
    );
}

export default Livro;
// expor a função para todo o sistema
// A carvernas de aço de Issac Asmiov, é o primeiro romance da consagrada Série dos Robôs, 
//           umas das mais populares de ficção científica. A história nasceu de um desafio: Asmiov 
//           queria provar para seu editor que a ficção científica não era limitante e poderia ser
//           incorporada a qualquer gênero literário, inclusive nos dramsa policiais.