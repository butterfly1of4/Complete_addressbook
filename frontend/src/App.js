import logo from './logo.svg';
import './App.css';
import NewUserForm from './components/NewUserForm.js'
import ReactDOM from 'react-dom';
import NewContactForm from "./components/NewContactForm.js";

function App() {
  return (
    <div className="App">
      <NewUserForm />
      <NewContactForm />
    </div>
  );
}

export default App;
