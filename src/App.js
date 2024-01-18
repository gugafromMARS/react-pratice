import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Greeting from './components/Greeting';
import { FirstComponent, SecondComponent } from './components/MyComponent';
import Student from './components/Student';
import Employee from './components/Employee';
import EventHandling from './components/EventHandling';
import Login from './components/Login';

function App() {


  const student = {
    firstName:"Gonçalo",
    lastName: "Try",
    email: "test@gmail.com"
  }

  const skills = ["html", "css", "js", "java"]


  return (
    <div className="App">
      {/* <Welcome name="Gonçalo"/>
      <Greeting name="Jhonny"/>
      <FirstComponent/>
      <SecondComponent/>
      <Student student={student} data={skills}/> */}
      {/* <Employee /> */}
      {/* <EventHandling /> */}
      <Login/>
    </div>
  );
}

export default App;
