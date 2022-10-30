import NavigationBar from "./components/NavigationBar";
import "./styles.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import About from "./components/About";
import Background from "./components/animations/Background";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="App">
      {/* <Background/> */}
      <NavigationBar />
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
