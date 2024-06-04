import "./App.css";
import StepsContainer from "./components/steps";
import MainContainer from "./components/Container";

function App() {
  return (
    <div className="flex flex-col md:flex-row gap-4 h-screen md:p-4">
      <StepsContainer />
      <MainContainer />
    </div>
  );
}

export default App;
