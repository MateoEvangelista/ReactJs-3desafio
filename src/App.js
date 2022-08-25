import "./styles.css";

//NavBar
import NavBar from "./components/NavBar";
import ListContainer from "./components/itemListContainer";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <ListContainer />
      <h1>Pet-Shop "Timmy"</h1>
      <h2>Mateo Evangelista</h2>
    </div>
  );
}
