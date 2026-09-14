import { Suspense } from "react"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Technologies from "./components/Technologies"


const technologiesFetch = async() => {
  const res = await fetch('/public/data.json');
  const data = await res.json();
  return data;
}


function App() {

  const technologiesPromise = technologiesFetch();

  return (
    <>
      <div className="w-11/12 mx-auto">
        <Nav></Nav>
        <Banner></Banner>
        <Suspense fallback={<h2>Loading</h2>}>
          <Technologies technologiesPromise={technologiesPromise}></Technologies>
        </Suspense>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
