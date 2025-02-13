import logo from './logo.svg';
import './App.css';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import { HiArrowUp } from "react-icons/hi";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='text-3xl font-bold underline text-red-800'>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiArrowUp />
          <AccessAlarmIcon />
          Learn React
          <AccessibilityIcon />
        </a>
      </header>
    </div>
  );
}

export default App;
