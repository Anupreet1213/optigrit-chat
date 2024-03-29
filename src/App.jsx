import { useState } from "react";
import Left from "./components/leftComponents/Left";
import Right from "./components/rightComponents/Right";
import SelectionContext from "./context/selectionContext";

function App() {
  const [rightSwitchValue, setRightSwitchValue] = useState(-1);
  return (
    <SelectionContext.Provider
      value={{ rightSwitchValue: rightSwitchValue, setRightSwitchValue }}
    >
      <main className="w-screen h-screen flex bg-gray-900 text-white">
        <Left />
        <Right />
      </main>
    </SelectionContext.Provider>
  );
}

export default App;
