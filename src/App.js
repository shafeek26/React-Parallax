import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";
import Text from "./components/Text";

function App() {
  return (
    <div className="container">
      <FirstComponent />
      <Text />
      <SecondComponent />
      <Text />
      <ThirdComponent />
    </div>
  );
}

export default App;
