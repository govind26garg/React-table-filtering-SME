import "./App.css";
import { ContextProvider } from "./Components/Hooks/GlobalContextHooks";
import TableData from "./Components/Elements/TableData";

function App() {
  return (
    <div className="container">
      <ContextProvider>
        <TableData />
      </ContextProvider>
    </div>
  );
}

export default App;
