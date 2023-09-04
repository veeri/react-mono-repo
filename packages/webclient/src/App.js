import logo from './logo.svg';
import './App.css';
import {Header} from '@vcode/components'
import {Cart} from '@vcode/analyze'

function App() {
  return (
    <div className="App">
      <Header />
      <Cart /> 
      <h1>Web Client</h1>
    </div>
  );
}

export default App;
