import { Hello } from './components/Hello';
import './App.css';

function App() {
  return (
    <div className="App">
      <Hello name="Birat" messageCount={10} isLoggedIn={false} />
      
    </div>
  );
}

export default App;
