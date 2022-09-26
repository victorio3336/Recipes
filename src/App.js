import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import HomePageCard from "./components/HomePageCard";
import Footer from "./components/Footer";
import Articles from "./components/Articles";
import Recipes from "./components/Recipes";

function App() {
  return (
    <div className="App">
      <HomePage />
      <HomePageCard />
      <Recipes />
      <Articles />
      <Footer />
    </div>
  );
}

export default App;
