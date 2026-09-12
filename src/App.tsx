import Nav from "./components/Nav"
import Hero from "./components/Hero"
import type { ITechnology } from "./types/technologyTypes";
import { useState } from "react";
import { Suspense } from "react";
import Technology from "./components/Technologies/Technology";
import { ToastContainer } from 'react-toastify';
import Footer from "./components/Footer";

// Fetching Data

const technologyFetch = async (): Promise<ITechnology[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
}


function App() {


  const [technologyPromise] = useState(() => technologyFetch());

  return (
    <>
        
      <Nav></Nav>
      <Hero></Hero>
      <Suspense fallback={<h2>loading...</h2>}>
        <Technology technologyPromise={technologyPromise}></Technology>
      </Suspense>
      <Footer></Footer>
       <ToastContainer></ToastContainer>
    </>
  )
}

export default App
