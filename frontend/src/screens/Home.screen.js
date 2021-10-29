import React, { useState } from "react";
import countries from "../config/countries";
import AutoComplete from '../components/inp/AutoComplete'
import AutoComplete1 from '../components/inp/AutoComplete1'


const Home = () => {
    const [data, setData] = useState()

  return (
    <div>
      <h1>Home Page</h1>
      <p>Country: {data}</p>
      <AutoComplete data={countries} val={data} changeVal={()=>setData()} />
      <AutoComplete1 />

    </div>
  );
};

export default Home;
