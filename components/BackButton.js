import Link from "next/link";
import Image from "next/future/image";

import backbtn from "../assets/backbtn.png";

function BackButton() {

    return (
        <div className="relative w-full mt-[4rem]">
            <Link href="/">
                <a><Image className="absolute bottom-0 right-[10%] w-[5rem] hover:scale-110" src={backbtn} alt="back button" /></a>
            </Link>
        </div>
    )
}

export default BackButton;