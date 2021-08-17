import "./App.css";
import ClassTimer from "./components/ClassTimer";
import Counter from "./components/Counter";
import DataFetching from "./components/DataFetching";
import DataFetchingTwo from "./components/DataFetchingTwo";
import DocTitleOne from "./components/DocTitleOne";
import DocTitleTwo from "./components/DocTitleTwo";
import FocusInput from "./components/FocusInput";
import HookTimer from "./components/HookTimer";
import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <div className="App">
      <DocTitleOne />
      <DocTitleTwo />
    </div>
  );
}

export default App;
