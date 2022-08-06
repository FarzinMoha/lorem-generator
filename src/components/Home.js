import React, { useEffect, useState } from "react";
import Error from "./Error";
import Header from "./Header";
import Homepage from "./Homepage";
import Loading from "./Loading";

const initialState = [];
function Home() {
    const [count , setcount] = useState(0)
  const [lorem, setLorem] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const fetchLorem = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const lorem = await response.json();
      setLoading(false);
        setLorem(lorem)
    } catch (er) {
        console.log('first')
    }

  };
  useEffect(()=>{
    fetchLorem()
},[])

    const countHandler = (count) =>{
        setcount(parseInt(count))
    }

    
    let element = ((loading) ? <Loading/> : ((lorem.lenght=0) ? <Error/> : <Homepage lorem={lorem.splice(0,count)} />))
    return (
        <>
      <Header count = {countHandler} />
      <main>
        {element}
      </main>
    </>
  );
}

export default Home;
