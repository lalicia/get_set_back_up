import BackButton from "../components/BackButton";


function About() {

    return (
        <div className="about-container">
            <div className="about-contents">
                <h1 className="about-title">About</h1>

                <h2 className="about-big">I am scared of everything</h2>

                <p className="about-p">This is how I handle my extreme fear of my laptop dying - by planning for the eventuality and providing myself with a roadmap.</p>

                <h2 className="about-big">It's all going to be ok</h2>

                <p className="about-p">That's all there is to this site. I wanted something for myself, but I figured it might help other people too, so I put everything together and made it a bit pretty. This is by NO means exhaustive but I feel it's enough of a safety net and a decent place to start.</p>

                <blockquote className="about-big">"sometimes good things fall apart so better things can fall together"<br></br>- Marilyn Monroe</blockquote>
            </div>
        
            <BackButton />
        </div>
    )
}

export default About;