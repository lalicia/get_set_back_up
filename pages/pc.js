import BackButton from "../components/BackButton";
import Head from "next/head";

import Instructions from "../components/Instructions.js";

function Pc() {
    
    return (
        <>
            <Head>
                <title>Get Set Back Up | PC</title>
            </Head>

            <Instructions 
                pagefor={"PC"}
                gitname={"Git Bash (the terminal shell where you use the command line)"}
                gitlink={"https://git-scm.com/downloads"}
                gitstep={"Click on the .exe file and follow the installation instructions"} />
            <BackButton />
        </>
    )
}

export default Pc;