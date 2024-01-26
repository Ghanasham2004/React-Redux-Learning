import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="app-container">
          <h1>---------- React Redux Tutorials ---------- </h1>
          <CakeContainer />
          <h2> --------------- R-R HooksCakeContainer ----------------- </h2>
          <HooksCakeContainer />
          <h2>------------- NewCakeContainer Container -------------- </h2>
          <NewCakeContainer />
          {/* <h1>React Redux ItemContainer</h1> */}
          {/* // If we want to use the same container for both cake and ice-cream then we can use this code */}
          {/* <ItemContainer cake />
          <ItemContainer /> */}
          <h2>------------------- Ice-Cream Container ------------------ </h2>
          <IceCreamContainer />
        </div>
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
