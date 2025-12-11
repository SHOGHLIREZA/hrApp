import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './Layout';
import PersonList from './components/PersonList';
import About from './pages/About';
import AddEmployee from './pages/AddEmployee';
import ErrorPage from './pages/ErrorPage';
import useAxios from './hooks/useAxios';
import EmployeesTable from './components/EmployeesTable';
import EmployeeTablePage from './pages/EmployeeTablePage';
function App() {

  const [employees, setEmployees] = useState([]); //Employee state
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    salary: '',
    phone: '',
    email: '',
    animal: '',
    startDate: '',
    location: '',
    department: '',
    skills: '',
  });

 
  const resetForm = () => {
    setFormData({
      name: '',
      title: '',
      salary: '',
      phone: '',
      email: '',
      animal: '',
      startDate: '',
      location: '',
      department: '',
      skills: '',
    });
  };


  const updateEmployee = (updatedEmployee) => {
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === updatedEmployee.id ? updatedEmployee : emp))
    );
  };

  const { get, post } = useAxios();


  useEffect(() => {
    get('http://localhost:3001/employees').then((response) => {
      setEmployees(response.data);
    });
  }, []);

  
  const onAddEmployee = () => {
    post('https://hrapp-bec7.onrender.com/employees', {
      id: (employees.length + 1).toString(),
      ...formData,
      skills: formData.skills.split(',').map((skill) => skill.trim()),
    })
      .then((response) => {
        setEmployees([...employees, response.data]);
        resetForm(); // Reset form after successful POST

        alert('Employee added successfully!');
      })
      .catch((error) => {
        console.error(
          'Error adding employee:',
          error.response.data || error.message
        );
      });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PersonList
                employees={employees}
                updateEmployee={updateEmployee}
              />
            }
          />
          <Route path="about" element={<About />} />
          <Route
            path="add"
            element={
              <AddEmployee
                formData={formData}
                setFormData={setFormData}
                onAddEmployee={onAddEmployee}
              />
            }
          />
          <Route path="table" element={<EmployeeTablePage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
