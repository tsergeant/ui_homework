import { Routes, Route } from "react-router-dom";

function Home() {
  return <h1>Web App Placeholder 2</h1>;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
