//BASIC TO ADVANCED PROPS
//-------------------------------------------------------------
// import { Hello } from './components/Hello';
// import { Person} from './components/Person';
// import { PersonList } from './components/PersonList';
// import './App.css';
// import { Status } from './components/Status';
// import { Heading } from './components/Heading';
// import { Oscar } from './components/Oscar';

// function App() {
//   const personName = {
//     first: 'Birat',
//     last: 'Roka'
//   }
//   const nameList = [
//     {
//       first: 'Rahul',
//       last: 'Sharma'
//     },
//     {
//       first: 'Saroj',
//       last: 'Chaudhary'
//     },
//     {
//       first: 'Sanjay',
//       last: 'Thapa'
//     }

//   ]
//   return (
//     <div className="App">
//       <Hello name="Birat" messageCount={10} isLoggedIn={false} />
//       <Person name = {personName} />
//       <PersonList  names = {nameList}/>
//       <Status status='loading' />
//       <Status status='success' />
//       <Status status='error' />
//       <Heading>Placeholder Text</Heading>
//       <Oscar>
//         <Heading>Oscar goes to Birat Roka</Heading>
//       </Oscar>
      
//     </div>
//   );
// }

// export default App;

//------------------------------------------------------------------------------

//EVENTS PROPS

import './App.css'
import { Button } from './components/Button'
import { Input } from './components/Input'

function App () {
  return <div className="App">
    <Button handleClick={(event,id) =>{
      console.log('Button Clicked', event,id)
    }}/>
    <Input value={'Birat'} handleChange={(event) =>{
      console.log('Input Changed', event)
    }}/>
    </div>
}
export default App

