import Link from "next/link";
import Image from "next/future/image";

import backbtn from "../assets/backbtn-lm.JPG";

function BackButton() {

    return (
        <Link href="/">
            <a><Image className="backbtn" src={backbtn} alt="back button" /></a>
        </Link>
    )
}

export default BackButton;