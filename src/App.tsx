import "./App.css";
import GridChild from "./components/grid-child";

function App() {
  return (
    <>
      <main className="grid grid-cols-1">
        <h1 className="text-4xl text-left mb-4">Transformation Design</h1>
        <div className="grid grid-cols-3 gap-2">
          <GridChild></GridChild>
          <GridChild></GridChild>
          <GridChild></GridChild>
        </div>
      </main>
    </>
  );
}

export default App;
