import clsx from "clsx";
import "./i18n";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Biography from "./components/Biography";
import Footer from "./components/Footer";

export interface Props {
  className?: string;
}

const App = ({ className }: Props) => {
  return (
    <div className={clsx(className, "mx-auto flex flex-col min-h-screen")}>
      <Header />
      <div className={clsx(className, "flex-1")}>
        <Hero />
        <Biography />
      </div>
      <Footer />
    </div>
  );
};

export default App;
