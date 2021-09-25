import { React } from "react";

import MenuBar from "../components/MenuBar";
import Header from "../components/Header";


const Layout = (props) => {
    return (
        <div className="font-Poppins">
            <Header />
            <MenuBar />
            <main className="main-content">
                {props.children}
            </main>
            {/* <Footer /> */}
        </div>
    );
};

export default Layout;