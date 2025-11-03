
import employees from "./employees";
import PersonCard from "./components/PersonCard";

const PersonList = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {employees.map((emp) => (
        <PersonCard key={emp.id} employee={emp} />
      ))}
    </div>
  );
};

export default PersonList;
