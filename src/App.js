import "./App.css";
import { Routes, Route, } from 'react-router-dom';
import SearchPage from "./SearchPage";
import HomePage from "./HomePage";

function App() {
  

  return (
    <Routes>
      <Route 
        exact path="/"
        element={
          <HomePage />
        }
      />
      <Route
        path="/search"
        element={
          <SearchPage /> 
        }
      />
    </Routes>
  );
}

export default App;
