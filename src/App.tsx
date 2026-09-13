import Banner from "./components/Banner"
import Nav from "./components/Nav"

function App() {

  return (
    <>
      <div className="w-11/12 mx-auto">
        {/* Navbar. */}
        <Nav></Nav>
        <Banner></Banner>
      </div>
    </>
  )
}

export default App
