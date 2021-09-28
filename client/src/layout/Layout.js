import { React } from "react";

import MenuBar from "../components/MenuBar";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Layout = (props) => {
    return (
        <div className="flex flex-col font-Poppins min-h-screen">
            <Header />
            {/* <MenuBar /> */}
            <main className="flex flex-grow">
                {props.children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;