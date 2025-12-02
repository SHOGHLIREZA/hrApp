
import employees from "../employees";
import PersonCard from "./PersonCard";

const PersonList = ({ employees, setEmployees }) => {
  const handleUpdateEmployee = (updatedEmp) => {
    const newEmployees = employees.map((emp) =>
      emp.id === updatedEmp.id ? updatedEmp : emp
    );
    setEmployees(newEmployees);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {employees.map((emp) => (
        <PersonCard
          key={emp.id}
          employee={emp}
          onUpdateEmployee={handleUpdateEmployee}
        />
      ))}
    </div>
  );
};

export default PersonList;
