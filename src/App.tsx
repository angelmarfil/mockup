import "./App.css";
import BaseLayout from "./layouts/BaseLayout";
import Slider from "./components/Slider";
import Categories from "./components/Categories";
import CardList from "./components/CardList";

function App() {
  return (
    <>
      <BaseLayout>
        <Slider />
        <Categories />
        <CardList />
      </BaseLayout>
    </>
  );
}

export default App;
