import "./App.css";
import Layout from "./components/layout";
import Main from "./components/Main";
import MainProfile from "./components/screenProfile/MainProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./components/signin/SignIn";
import Tables from "./components/tables/Tables";
import TodoList from "./components/screenList/TodoList";
import SignUp from "./components/signUp/SignUp";

function App() {
  return (
    <Layout title="profile">
      <Routes>
        <Route path="profile" element={<MainProfile />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<MainProfile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/table" element={<Tables />} />
        <Route path="/nofica" element={<TodoList />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Layout>
  );
}

export default App;
