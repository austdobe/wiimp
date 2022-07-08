import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <nav>
        <Link to={"/pantry"}>pantry</Link>
      </nav>
    </div>
  );
}

export default App;
