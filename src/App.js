import Header from "./components/Header";
import Player from "./components/Player";
import Gameboard from "./components/Gameboard";


// JSX -JavaScript extention of XML(extensible Markup Language) 
// React Components are reusable JavaScript functions that return the User Interface or (UI)
//Component -> F(D) => UI

function App() {
  return (
    <>
      <Header />
      <section>
      <Player whichPlayer = "X" wins="42" />
      <Player whichPlayer = "O" wins="37" />
      </section>
      <Gameboard />
    </>
  );
}

export default App;
