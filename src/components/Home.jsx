import React, { useContext } from "react";
import { AuthContext } from "../contexts/UserContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  return (
    <div>
      <h2>this is home for {user?.email}</h2>
    </div>
  );
};

export default Home;
