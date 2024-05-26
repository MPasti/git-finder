import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Repos } from "./pages/Repos";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/repos/:username" element={<Repos />} />
    </Routes>
  );
}
