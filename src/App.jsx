import Header from "./components/Header";
import Footer from "./components/Footer";
import Person from "./components/Person";
import "./App.css"; // استایل‌های پایین را اضافه کن

function App() {
  const sample = {
    name: "Reza Shoghli",
    title: "Software Developer",
    salary: "45,000 EUR",
    phone: "+358 40 123 4567",
    email: "shoghlireza@gmail.com",
    animal: "Cat",
  };

  return (
    <div className="App">
      <Header appName="HR App — WP25K" />
      <main className="container main">
        <h2>Team</h2>
        <div className="people-grid">
          <Person {...sample} />
          {/* می‌توان نمونه‌های دیگر اضافه کرد */}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
