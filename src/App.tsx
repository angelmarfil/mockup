import "./App.css";
import BaseLayout from "./layouts/BaseLayout";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <BaseLayout>
        <h1>Vite + React</h1>
        <Slider />
      </BaseLayout>
    </>
  );
}

export default App;
