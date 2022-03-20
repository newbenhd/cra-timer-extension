import React from "react";
import "./App.css";
import StickyFooter from "./components/Molecules/StickyFooter";
import StickyHeader from "./components/Molecules/StickyHeader";
import HList from "./components/Atoms/HList";
import Button from "./components/Atoms/Button";
import Timer from "./components/Molecules/Timer";

function App() {
  return (
    <div className="App">
      <StickyHeader>
        <Timer />
      </StickyHeader>
      <StickyFooter>
        <HList justifyContent="flex-end" alignItems="center" gap={5}>
          <Button type="Danger" name="delete" />
          <Button type="Secondary" name="Edit" />
          <Button type="Primary" name="new timer" />
        </HList>
      </StickyFooter>
    </div>
  );
}

export default App;
