export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="app-footer">
      <div className="container">
        <p>© {year} WP25K — All rights reserved.</p>
      </div>
    </footer>
  );
}
