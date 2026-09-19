import {React} from "react";
import HomeProduct from "../component/home/HomeProduct";
import HomeCare from "../component/home/HomeCare";
import Stocks from "../component/home/Stocks";

function Home() {

    return (
        <>
        <section className="py-25">
        <HomeProduct  />
        <HomeCare />
        <Stocks />
        </section>
        </>
    );
}

export default Home;