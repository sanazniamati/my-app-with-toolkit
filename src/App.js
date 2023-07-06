import { Provider } from "react-redux";
import store from "./features/store";
import Counter from "./components/Counter";
function App() {
  return (
    <Provider store={store}>
      <div>Redux toolkit</div>
      <Counter />
    </Provider>
  );
}

export default App;
