import "./App.css";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

function App() {
  // ADD JS code here

  const species = useQuery(api.queries.species);
  return (
    <div className="App">
      <div className="MyAppContainer">Generated Code Here</div>

      <div className="Species">
        <h2>Darwin Code Species</h2>
        {species?.map(({ _id, key, prompt }) => (
          <div key={_id}>
            <div>
              <b>key</b>: {key}
            </div>
            <div>
              <b>Prompt</b>: {prompt}
            </div>
            <div>
              <b>Variants</b>: 2
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
