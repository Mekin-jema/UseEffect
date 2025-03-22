import { useState, useEffect } from "react";
import Section from "./Section.jsx";

function Home() {
  const [visits, setVisits] = useState(0);


  useEffect(() => {
    console.log("Home has re-rendered!");
  });

  return (
    <>
      <h1>Visits: {visits}</h1>
      <button onClick={()=> setVisits((prevVisits) => prevVisits + 1)}>increment</button>
      <Section />
    </>
  );
}

export default Home;
