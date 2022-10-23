import Footer from "../components/Footer.js";

// import {useTheme} from "next-themes";
// import {MoonIcon, SunIcon} from "@heroicons/react/solid";

// import {useState, useEffect} from "react";

function Layout({ children }) {
    
    return (
        <>
            { children }
            <Footer />
        </>
    )
}

export default Layout;