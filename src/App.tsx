import "./App.css";
import BaseLayout from "./layouts/BaseLayout";
import Slider from "./components/Slider";
import Categories from "./components/Categories";

function App() {
  return (
    <>
      <BaseLayout>
        <Slider />
        <Categories />
      </BaseLayout>
    </>
  );
}

export default App;
