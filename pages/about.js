import BackButton from "../components/BackButton";
import Head from "next/head";


function About() {

    return (
        <>
            <Head>
                <title>Get Set Back Up | About</title>
            </Head>

            <div className="about-container">
                <div className="about-contents max-w-[80%] m-auto">
                    <h1 className="about-title text-center mt-[18%] text-4xl font-fancy mb-[1.5rem] font-bold">About</h1>

                    <h2 className="text-center text-2xl font-fancy mt-[1rem] mb-[1rem] text-indigo-400 max-w-[95%] m-auto font-semibold">I am scared of everything</h2>

                    <p className="text-lg font-medium">This is how I handle my extreme fear of my laptop dying - by planning for the eventuality and providing myself with a roadmap.</p>

                    <h2 className="text-center text-2xl font-fancy mt-[1rem] mb-[1rem] text-indigo-400 max-w-[95%] m-auto font-semibold">It's all going to be ok</h2>

                    <p className="text-lg font-medium">That's all there is to this site. I wanted something for myself, but I figured it might help other people too, so I put everything together and made it a bit pretty. This is by NO means exhaustive but I feel it's enough of a safety net and a decent place to start.</p>

                    <blockquote className="text-center text-2xl font-fancy mt-[1rem] mb-[1rem] text-indigo-400 italic max-w-[95%] m-auto font-semibold">"sometimes good things fall apart so better things can fall together"<br></br>- Marilyn Monroe</blockquote>
                </div>
            
                <BackButton />
            </div>
        </>
    )
}

export default About;