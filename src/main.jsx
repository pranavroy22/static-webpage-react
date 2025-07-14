import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

function Page() {
  return <h1>Hey i am online</h1>;
}
createRoot(document.getElementById("root")).render(
  <div>
    <header>
      <h1>I am doing react</h1>
    </header>
    <main>
      <ul>
        <li>Thank you for your review!</li>
        <li>Thank you for your review!</li>
        <li>Thank you for your review!</li>
        <li>Thank you for your review!</li>
      </ul>
    </main>
    <footer>
      <p>@2025 lets build this app</p>
    </footer>
  </div>
);
