import dadosJason from './dados.json'
import './App.css';
import Livro from './components/livros';


function App() {
  return (
  <div className='App'>
      <Livro dadosJson={dadosJason}></Livro>
  </div>
  );
}

export default App;
