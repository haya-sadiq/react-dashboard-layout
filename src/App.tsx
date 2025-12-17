import Header from "./components/header";
import Aside from "./components/aside";
import Main from "./components/main";



function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <Aside />
        <Main/>
      </div>
      
    </>
  );
}

export default App;
