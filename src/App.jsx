import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Card from "./components/Card.jsx";
import data from "./assets/data.js";

function App() {
    const cards = data.map((card) => {
        return <Card key={card.id} {...card} />;
    });
    return (
        <>
            <Navbar />
            <main>{cards}</main>
        </>
    );
}

export default App;
