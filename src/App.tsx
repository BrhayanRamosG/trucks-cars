import { TopArrow } from "./components/TopArrow";
import { VehicleCard } from "./layouts/VehicleCard";
import { tabTitle } from "./utils/tabTitle";

function App() {
  tabTitle("Inicio");
  return (
    <div className="App">
      <VehicleCard />
      <TopArrow />
    </div>
  );
}

export default App;
