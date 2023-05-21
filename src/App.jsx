import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute";
import SearchResult from "./components/SearchResult";
import { AppContext } from "./utils/ContextApi";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <Routes>

          <Route path="/" exact element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/:query/:startIndex" exact element={<SearchResult />} />
        </Routes>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
