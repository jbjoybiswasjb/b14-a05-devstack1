import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Technologies from "./components/Technologies"

function App() {

  return (
    <>
      <div className="w-11/12 mx-auto">
        <Nav></Nav>
        <Banner></Banner>
        <Technologies></Technologies>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
