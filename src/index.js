import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Apidata from "./pages/Apidata";
import TodoList from "./pages/TodoList";
import Contact from "./pages/Contact";
import Page from "./pages/Page";
import Form from "./pages/Form";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Formik from "./pages/Formik";
import  UseContextapp  from "./pages/UseContextapp";
import MyForm from "./components/Formvalidate.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="apidata" element={<Apidata />} />
          <Route path="todolist" element={<TodoList />} />
          <Route path="contact" element={<Contact />} />
          <Route path="page" element={<Page />}/>
          <Route path="form" element={<Form />}/>
          <Route path="formik" element={<Formik />}/>
          <Route path="usecontext" element={<UseContextapp />}/>
          <Route path="formvalidate" element={<MyForm />}/>
          <Route path="login" element={<Login />}/>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
