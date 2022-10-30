import NavigationBar from "./components/NavigationBar";
import "./styles.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import MainBanner from "./components/MainBanner";
import Background from "./components/animations/Background";

function App() {
  return (
    <div className="App">
      <Background/>
      <NavigationBar />
      <MainBanner/>
    </div>
  );
}

export default App;
