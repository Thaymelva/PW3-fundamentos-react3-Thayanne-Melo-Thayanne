import dadosJSON from "./dados.json"
import Livro from './components/livro';
import './App.css';


function App() {
  return (
    <div className="App">
        <Livro dadosJSON={dadosJSON}/>
    </div>
  );
}

export default App;
