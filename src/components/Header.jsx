export default function Header({ appName = "hrApp" }) {
  return (
    <header className="app-header">
      <div className="container">
        <h1>{appName}</h1>
      </div>
    </header>
  );
}
