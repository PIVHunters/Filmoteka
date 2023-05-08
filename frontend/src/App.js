import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import Header from "./components/UI/header/Header";
import Footer from "./components/UI/footer/Footer";
import AppRouter from "./components/AppRouter";

function App() {
  return (
      <BrowserRouter>
        <Header />
          <div className="page">
              <AppRouter />
              <Footer />
          </div>
      </BrowserRouter>
  );
}

export default App;
