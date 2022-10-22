import Footer from "../components/Footer.js";

import {useTheme} from "next-themes";
import {MoonIcon, SunIcon} from "@heroicons/react/solid";

function Layout({ children }) {

    const {systemTheme , theme, setTheme} = useTheme ();

    const renderThemeChanger= () => {

        const currentTheme = theme === "system" ? systemTheme : theme ;
  
        if(currentTheme ==="dark"){
          return (
            <SunIcon className="w-10 h-10 text-yellow-500 " role="button" onClick={() => setTheme('light')} />
          )
        }
  
        else {
          return (
            <MoonIcon className="w-10 h-10 text-gray-900 " role="button" onClick={() => setTheme('dark')} />
          )
        }
     };

    return (
        <>
            {renderThemeChanger()}
            { children }
            <Footer />
        </>
    )
}

export default Layout;