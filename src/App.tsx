import classes from "./app.module.css";
import { Router } from "./router";

function App() {
  return (
    <div className={classes.app}>
      <h1>GitHub Finder</h1>
      <Router />
    </div>
  );
}

export default App;
