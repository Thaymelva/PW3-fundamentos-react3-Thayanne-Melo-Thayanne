import './livros.css'

function livro({dadosJson}){
    return(
        <>
            {
                dadosJson.map((livro)=>(
                        <div className="page-container">
                          <div className="book-container">
                            <div className="book-cover">
                              <img src={livro.imagem} alt="Capa do livro" />
                            </div>
                            <div className="book-title">
                              <h1>{livro.titulo}</h1>
                              <div>
                                <p>{livro.autor}</p>
                              </div>
                              <p className="book-description">
                                {livro.descricao}
                              </p>
                              <div className="book-meta">
                                <span>_______________________________________________________________________________________________</span>
                              </div>
                            </div>
                          </div>
                        </div>
                    
                ))
            };
        </>
    );
}

export default livro;