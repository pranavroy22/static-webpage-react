import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Header";
import MainComponenet from "./MainComponent";
import Footer from "./Footer";

function Page() {
  return (
    <div className="app-container">
      <Header />
      <MainComponenet />
      <Footer />
    </div>
  );
}
createRoot(document.getElementById("root")).render(<Page />);
