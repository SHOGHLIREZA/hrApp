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
      <header style={{
  padding: "10px 20px",
  backgroundColor: "#eee",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  gap: "20px"
}}>
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/add">Add Employee</Link>
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
