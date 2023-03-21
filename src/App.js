import logo from "./logo.svg";
import "./App.css";

const number = 5555;
const singer = { name: "dr. Mahfuz", job: "singer" };
const singer2 = { name: "Eva Rohoman", job: "singer2" };

const singerStyle = {
  color: "purple",
  backgroundColor: "white",
};

function App() {
  return (
    <div className="App">
      <Parson></Parson>
      <Parson></Parson>
      <Parson></Parson>
      <h5>New component. YAY</h5>
      <p>rock mama React mama.</p>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Parson(props) {
  console.log(props);
  return (
    <div className="parson">
      <h1>Sakib Al Hasan</h1>
      <p>profession: Cricket</p>
    </div>
  );
}

function Friend() {
  return (
    <div className="container">
      <h3>Name: Ajay Devgun</h3>
      <p>Job: mara mari</p>
    </div>
  );
}

export default App;
