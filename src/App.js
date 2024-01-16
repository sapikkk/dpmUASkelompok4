import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CekNoHp from "./pages/cek-no-hp";
import IPhone13Mini from "./pages/i-phone13-mini";
import IPhone13Mini1 from "./pages/i-phone13-mini1";
import HomeScreen from "./pages/home-screen";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-13-mini-3":
        title = "";
        metaDescription = "";
        break;
      case "/iphone-13-mini-2":
        title = "";
        metaDescription = "";
        break;
      case "/home-screen":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<CekNoHp />} />
      <Route path="/iphone-13-mini-3" element={<IPhone13Mini />} />
      <Route path="/iphone-13-mini-2" element={<IPhone13Mini1 />} />
      <Route path="/home-screen" element={<HomeScreen />} />
    </Routes>
  );
}
export default App;
