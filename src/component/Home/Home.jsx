import { Helmet } from "react-helmet-async";
import Cetagoris from "../Cetagoris/Cetagoris";
import Fetures from "../Fetures/Fetures";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Helmet><title>Career Hub | Home</title></Helmet>
            <Navbar></Navbar>
            <Cetagoris></Cetagoris>
            <Fetures></Fetures>
        </div>
    );
};

export default Home;