import { BrowserRouter, Route, Routes as Router } from "react-router-dom";
import { Layout } from "../layout";
import { Home } from "../pages/Home";

export function Routes() {
  return (
    <BrowserRouter>
      <Router>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />} />
        </Route>
      </Router>
    </BrowserRouter>
  );
}
