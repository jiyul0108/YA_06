import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import First from "../components/First";

function Home(){
    return(
        <>
        <Header/>
        <First/>
        </>
    )
}

export default Home;