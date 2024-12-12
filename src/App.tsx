import "./App.css";
import GridChild from "./components/grid-child";

function App() {
  return (
    <>
      <main className="grid grid-cols-1">
        <div className="max-w-4xl">
          <h1 className="mb-4 text-left text-4xl">Transformation Design</h1>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
            <GridChild></GridChild>
            <GridChild></GridChild>
            <GridChild></GridChild>
          </div>
          <h1 className="mb-4 text-left text-4xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
            veniam ut quo sed consequuntur asperiores ipsa commodi ducimus,
            optio ad dignissimos.
          </h1>
          <div className="relative flex flex-col p-2">
            <img
              src="https://placehold.co/600x200"
              alt="test"
              className="rounded-lg object-cover"
            />
            <div className="flex flex-col items-center gap-2 text-start">
              <div className="flex flex-row justify-between">
                <p>
                  <span>X</span> June 24th, 2024
                </p>
                <p>
                  <span>X</span> June 24th, 2024
                </p>
              </div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                sit fuga modi repellendus similique recusandae odit saepe,
                sapiente tempore eaque odio quas minima, magni mollitia. Animi
                quam quis sunt asperiores!
              </p>
              <div className="my-8">
                <img
                  src="https://placehold.co/600x200"
                  alt="test"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
