
import "./App.css";
import Header from "./compoments/header/header.jsx";
import Destinations from "./compoments/destinations/destinations.jsx";
import Footer from "./compoments/footer/footer.jsx";
import Login from "./compoments/Login/Login.jsx";

function App() {
    return (
        <div className="app">
            <Login />
            <Header />
            <Destinations />
            <Footer />
        </div>
    );
}

export default App;
