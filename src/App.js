import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Quotation from "./pages/quotation/Quotation"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Quotation />} />
          {/* <Route path="test" element={<Test />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;