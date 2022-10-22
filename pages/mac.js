import BackButton from "../components/BackButton";
import Head from "next/head";

import Instructions from "../components/Instructions.js";

function Mac() {

    return (
        <>
            <Head>
                <title>Get Set Back Up | MAC</title>
            </Head>

            <Instructions 
                pagefor={"MAC"}
                gitname={"Homebrew (used to install Git)"}
                gitlink={"https://brew.sh/"}
                gitstep={"Type 'brew install git' to download the latest version"} />
            <BackButton />
        </>
    )
}

export default Mac;