import { useState } from "react";
import PersonList from "./components/PersonList";
import About from "./components/About";
import AddEmployee from "./components/AddEmployee";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import initialEmployees from "./employees"; // آرایه اولیه کارمندان

function App() {
  // state مشترک برای همه صفحات
  const [employees, setEmployees] = useState(initialEmployees);

  // تابع برای اضافه کردن کارمند جدید
  const handleAddEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  return (
    <Router>
      <header style={{ padding: "10px", backgroundColor: "#eee" }}>
        <nav>
          <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
          <Link to="/about" style={{ marginRight: "10px" }}>About</Link>
          <Link to="/add">Add Employee</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<PersonList employees={employees} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/add"
          element={<AddEmployee onAddEmployee={handleAddEmployee} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
