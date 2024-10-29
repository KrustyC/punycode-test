import "./App.css";

const links = [
  { href: "http://δοκιμή.com", label: "http://δοκιμή.com" },
  { href: "http://مثال.com", label: "http://مثال.com" },
];

function App() {
  return (
    <>
      <h1>Punycode Tests Links</h1>
      <p className="read-the-docs">Click on any of the links</p>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
