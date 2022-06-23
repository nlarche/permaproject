import type { Component } from "solid-js";
import styles from "./App.module.css";
import Vegetables from "./components/Vegetables";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Vegetables />
    </div>
  );
};

export default App;
