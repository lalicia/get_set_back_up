//catchall for url not existing - this will be served up
import {useEffect} from "react";
import Link from "next/link";
import Image from "next/future/image";
import {useRouter} from "next/router";

import BackButton from "../components/BackButton.js";
import Gandalf from "../assets/gandalf.gif";

function NotFound() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 6000)
    }, [])

    return (
        <>
        <div className="notfound">
            <h1>Oh dear...</h1>
            <Image src={Gandalf} alt="Gandalf has no memory of this place" />
            <h2>Let's go back to the <Link href="/"><a>Homepage</a></Link></h2>
        </div>
        <BackButton />
        </>
    )
}

export default NotFound;