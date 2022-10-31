import NavigationBar from "./components/NavigationBar";
import "./styles.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import Profile from "./components/Profile";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Profile/>
      <Skills/>
    </div>
  );
}

export default App;
