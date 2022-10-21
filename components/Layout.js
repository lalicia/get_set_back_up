import Footer from "../components/Footer.js";

function Layout({ children }) {
    return (
        <>
            { children }
            <Footer />
        </>
    )
}

export default Layout;