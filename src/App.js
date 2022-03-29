import logo from './logo.svg';
import './App.css';
import { LoginComponent } from './components/LoginComponent';
import { GetApi } from './components/GetApi';

function App() {
  return (
    // loading loginComponent and rendered to the DOM
    <LoginComponent />,
    <GetApi />
  );
}

export default App;