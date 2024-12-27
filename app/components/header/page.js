import Link from 'next/link';

export default function Header() {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <Link href="/">
          <button style={buttonStyle}>Top</button>
        </Link>
        <Link href="/news">
          <button style={buttonStyle}>News</button>
        </Link>
        <Link href="/category">
          <button style={buttonStyle}>Category</button>
        </Link>
      </nav>
    </header>
  );
}

const headerStyle = {
  backgroundColor: "#f8f9fa",
  padding: "10px 20px",
  textAlign: "center",
};

const navStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "10px",
};

const buttonStyle = {
  padding: "10px 20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  backgroundColor: "#ffffff",
  cursor: "pointer",
};
