import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./styles/style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById("root")).render(<App />);
