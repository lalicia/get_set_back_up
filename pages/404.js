//catchall for url not existing - this will be served up
import {useEffect} from "react";
import Link from "next/link";
import Image from "next/future/image";
import {useRouter} from "next/router";

import BackButton from "../components/BackButton.js";
import Gandalf from "../assets/gandalf.gif";

import Head from "next/head";

function NotFound() {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 6500)
    }, [])

    return (
        <>
            <Head>
                <title>Get Set Back Up | Oops - no such page</title>
            </Head>

            <div className="notfound max-w-[80%] m-auto flex flex-col justify-self-center justify-center">
                <h1 className="text-center mt-[15%] text-4xl font-fancy mb-[1.5rem] font-bold">Oh dear...</h1>
            
                <div className="flex justify-self-center justify-center">
                    <Image priority="true" src={Gandalf} alt="Gandalf has no memory of this place" />
                </div>

                <h2 className="text-center text-2xl font-fancy mt-[1rem] mb-[1rem] max-w-[95%] m-auto font-semibold">Let's go back to the <Link href="/"><a className="text-indigo-600 hover:text-[#5271ff]">Homepage</a></Link></h2>
            </div>
            {/* <BackButton /> */}
        </>
    )
}

export default NotFound;