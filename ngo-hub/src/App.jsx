import Navbar from "./components/Navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app__content">
        <AppRoutes />
      </main>
    </div>
  );
}
