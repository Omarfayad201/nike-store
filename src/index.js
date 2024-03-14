import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from "./App.jsx";
import  "./index.css";
import { Provider } from "react-redux";
import Store from "./Component/Stories.jsx";
import { Toaster } from "react-hot-toast";

 ReactDOM.createRoot(document.getElementById("root")).render(<Provider store={Store}><Toaster position="right-center" reverseOrder={false} /><App /></Provider>)

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);