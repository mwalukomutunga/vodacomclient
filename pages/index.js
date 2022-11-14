import Router, { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import Sales from "./sales";
const page = "/Registrations/county/";
const Home = () => {

  const router = useRouter();
  const user = useSelector((state) => state.user);
  useEffect(() => {
   
    if (user && user.isLogged && user.isLogged === true) {
    } else {
      router.push("/login");
    }
  }, []);

  return (
  <Sales/>
  );
 
};

export default Home;
