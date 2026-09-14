import { Suspense } from "react"
import Banner from "./components/Banner"
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Technologies from "./components/Technologies"
import type { Itechnology } from "./types/technologyType"

import { ToastContainer } from "react-toastify"


const technologiesFetch = async():Promise<Itechnology[]> => {
  const res = await fetch('/data.json');
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
        <Suspense fallback={<h2>Loading...</h2>}>
          <Technologies technologiesPromise={technologiesPromise}></Technologies>
        </Suspense>
        <Footer></Footer>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default App
