import "./App.css";
import StepsContainer from "./components/steps";
import MainContainer from "./components/Container";

function App() {
  return (
    <div className="flex flex-col md:flex-row md:gap-4 h-screen md:p-4 relative">
      <StepsContainer />
      <MainContainer />
    </div>
  );
}

export default App;
