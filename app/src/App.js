import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  /*ESTADO DE DADO NOME*/
  const [nome, setNome] = useState("");

  /*ESTADO DE DADOS DE E-MAIL*/
  const [email, setEmail] = useState("");
  
  /*ESTADO DE DADOS DE SENHA*/
  const [SENHA, setSenha] = useState("");

  function cadastrarUsuario(event){
    event.preventDefault();
    // alert('TESTE DE SUBMIT');
    alert (`NOME:${nome} E-MAIL:${email} SENHA:${SENHA}`);
  }
  return (
    <div className="App">

     <form onSubmit={cadastrarUsuario} className='form'>
      <h1>FORMULÁRIO DE CADASTRO</h1>

      <input
      type='text'
      placeholder='DIGITE SEU NOME AQUI'
      required
      value={nome}
      onChange={(event)=>{setNome(event.target.value)}}
      />

      <input
      type='email'
      placeholder='DIGITE SEU EMAIL AQUI'
      required
      value={email}
      onChange={(event)=>{setEmail(event.target.value)}}
      />

      <input
      type='password'
      placeholder='DIGITE SUA SENHA'
      required
      value={SENHA}
      onChange={(event)=>{setSenha(event.target.value)}}
      />

      <button type='submit'> CADASTRAR</button>
     </form>
    </div>
  );
}

export default App;
