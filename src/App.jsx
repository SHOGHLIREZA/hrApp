import { useState, useEffect } from "react";
import PersonList from "./components/PersonList";
import About from "./components/About";
import AddEmployee from "./components/AddEmployee";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import useAxios from "./hooks/useAxios"; 

function App() {
  const { get, post } = useAxios(); 
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await get("http://localhost:3001/employees"); // یا آدرس Render
        setEmployees(res.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchEmployees();
  }, [get]);

  // تابع برای اضافه کردن کارمند جدید
  const handleAddEmployee = async (newEmployee) => {
    try {
      const res = await post("http://localhost:3001/employees", newEmployee);
      setEmployees([...employees, res.data]);
    } catch (err) {
      console.error(err);
      alert("Error adding employee ❌");
    }
  };

  if (loading) {
    return <p>Loading employees...</p>;
  }

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
