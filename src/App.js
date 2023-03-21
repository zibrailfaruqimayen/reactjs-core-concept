import logo from "./logo.svg";
import "./App.css";

const number = 5555;
const singers = [
  { name: "dr. Mahfuz", job: "singer" },
  { name: "Eva Rohoman", job: "singer2" },
  { name: "Agun", job: "sopno" },
  { name: "Shuvro", job: "pathor" },
];

const singerStyle = {
  color: "purple",
  backgroundColor: "white",
};

function App() {
  const nayoks = [
    "Rubel",
    "BappaRaz",
    "Kuber",
    "Jashim",
    "Salman Shah",
    "Riyaz",
  ];
  return (
    <div className="App">
      {nayoks.map((nayok) => (
        <li>Name: {nayok}</li>
      ))}

      {nayoks.map((nayok) => (
        <Parson name={nayok}></Parson>
      ))}
      {singers.map((singer) => (
        <Parson name={singer.name}></Parson>
      ))}

      {/* <Parson name={nayoks[0]} nayika="Mousumi"></Parson>
      <Parson name={nayoks[1]} nayika="Cheka"></Parson>
      <Parson name={nayoks[2]} nayika="Kopila"></Parson> */}
      <h5>New component. YAY</h5>
      <p>rock mama React mama.</p>
      <Friend movie="Singgam" phone="0177777"></Friend>
      <Friend phone="0199999"></Friend>
    </div>
  );
}

function Parson(props) {
  return (
    <div className="parson">
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
    </div>
  );
}

function Friend(props) {
  // console.log(props);
  return (
    <div className="container">
      <h3>Name: {props.movie}</h3>
      <p>Phone: {props.phone}</p>
    </div>
  );
}

export default App;
