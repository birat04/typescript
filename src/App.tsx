import { Hello } from './components/Hello';
import { Person} from './components/Person';
import { PersonList } from './components/PersonList';
import './App.css';

function App() {
  const personName = {
    first: 'Birat',
    last: 'Roka'
  }
  const nameList = [
    {
      first: 'Rahul',
      last: 'Sharma'
    },
    {
      first: 'Saroj',
      last: 'Chaudhary'
    },
    {
      first: 'Sanjay',
      last: 'Thapa'
    }

  ]
  return (
    <div className="App">
      <Hello name="Birat" messageCount={10} isLoggedIn={false} />
      <Person name = {personName} />
      <PersonList  names = {nameList}/>
      
    </div>
  );
}

export default App;
