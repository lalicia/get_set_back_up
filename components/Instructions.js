import Link from "next/link";

function Instructions({pagefor, gitname, gitlink, gitstep}) {

    return (
        <div className="instructions-container max-w-[90%] m-auto">
            <h1 className="text-center mt-[8%] text-4xl font-fancy mb-[1.5rem] font-bold">{pagefor}</h1>
            <div className="vscode">
                <h2 className="text-left text-xl font-fancy mt-[1rem] text-indigo-500 font-semibold mb-[.25rem]">VS Code (or your IDE of choice)</h2>
                <h3 className="italic mb-[.5rem]">Instructions below will be for VS Code as this is the IDE I know and use - I imagine they'll be somewhat similar for other IDEs, but yeah good luck!</h3>
                
                <a className="text-[#5271ff]" href="https://code.visualstudio.com/download" alt="link to visualstudio.com download" target="_blank" rel="noreferrer">
                    https://code.visualstudio.com/download
                </a>

                <ol className="list-decimal list-inside mt-[.5rem]">
                    <li className="mb-[.3rem]">Click on your operating system to start the download</li>
                    <li className="mb-[.3rem]">Unzip the download and follow the installation instructions</li>
                    <li className="mb-[.3rem]">Open the program once the installation has completed</li>
                    <li className="mb-[.3rem]">On the left-hand side of the page, click on the Extensions icon (icon with 4 squares) and in the search bar, search and add:</li>
                    
                   
                    <ul className="list-disc list-inside mt-[.5rem] max-w-[85%] m-auto">
                        <li className="mb-[.3rem]">School of Code Extension Pack (this has lots of things already bundled together to make our lives easier - thank you School of Code!)</li>
                        <li className="mb-[.3rem]">Prettier (code formatter)</li>
                        <li className="mb-[.3rem]">LiveShare (allows remote collaboration with others)</li>
                    </ul>

                    <li className="mb-[.3rem]">If you use it, set up AutoSave as this will not function automatically</li>
                </ol>
            </div>

            <div className="gitbash">
                <h2 className="text-left text-xl font-fancy mt-[1rem] mb-[.5rem] text-indigo-500 font-semibold">{gitname}</h2>
                    
                <a className="text-[#5271ff]" href={gitlink} alt="link to bash command line download" target="_blank" rel="noreferrer">
                    {gitlink}
                </a>

                <ol className="list-decimal list-inside mt-[.5rem]">
                    <li className="mb-[.3rem]">{gitstep}</li>
                    <li className="mb-[.3rem]">Open VS Code - open a terminal</li>
                    <li className="mb-[.3rem]">On the right-hand side of the terminal, click on the down arrow next to the '+' button and select Git Bash</li>
                    <ul className="list-disc list-inside mt-[.5rem] max-w-[85%] m-auto">
                        <li className="mb-[.3rem]">To check the version of Git/Bash type: 'git --version' or 'bash --version'</li>
                        <li className="mb-[.3rem]">NB. If you have a problem when running these, make sure you fully exit VS Code and then reopen to try again, which should allow the above prompts to run correctly</li>
                    </ul>
                </ol>
            </div>

            <div className="node">
                <h2 className="text-left text-xl font-fancy mt-[1rem] mb-[.5rem] text-indigo-500 font-semibold">Node.js (allows devs to use JavaScript to write Server-Side scripts)</h2>
                
                <a className="text-[#5271ff]" href="https://nodejs.org/en/download/" alt="link to nodejs.org download" target="_blank" rel="noreferrer">
                    https://nodejs.org/en/download/
                </a>

                <ol className="list-decimal list-inside mt-[.5rem]">
                    <li className="mb-[.3rem]">Once downloaded, follow the installation instructions</li>
                    <li className="mb-[.3rem]">Once installed you can check the version of Node by typing 'node --v' into the terminal on VS Code</li>
                    <ul className="list-disc list-inside mt-[.5rem] max-w-[85%] m-auto">
                        <li className="mb-[.3rem]">You can also check the NPM version using 'npm -v'</li>
                    </ul>
                    <li className="mb-[.3rem]">A little test to see if Node is working: type 'node' to access Node.js from your terminal, then type: console.log("This is working") - this should print to your terminal</li>
                    <ul className="list-disc list-inside mt-[.5rem] max-w-[85%] m-auto">
                        <li className="mb-[.3rem]">NB. Again, if you have any issues with the above instructions not working in VS Code following installation, please make sure you fully exit and restart VS Code before attempting again</li>
                    </ul>
                </ol>
            </div>

            <div className="other-tips mt-[1rem]">
                <h2 className="text-left text-xl font-fancy mt-[1rem] mb-[.5rem] text-indigo-500 font-semibold">Other Tips</h2>
                <p className="mb-[1rem]">Password Manager - if you use a password manager, go grab that and set it up.<br></br>No links here because who knows what you might be using...</p>

                <p className="mb-[.3rem]">Browser Extensions - examples here relate to Chrome (as that's what I know and use) but I imagine they're similar on other browsers and will at least act as reminders that you might want to sort them out if you use any:</p>
                <ul className="list-disc list-inside mt-[.5rem] max-w-[85%] m-auto">
                    <li>
                        <a className="text-[#5271ff]" href="https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh" alt="json viewer link" target="_blank" rel="noreferrer">JSON Viewer</a>
                    </li>
                    <li>
                        <a className="text-[#5271ff]" href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en" alt="React developer tools link" target="_blank" rel="noreferrer">React Developer Tools</a>
                    </li>
                </ul>

                <p className="mt-[1rem] mb-[1em]">Bookmarks - here are just a few suggestions for sites you might want to (re)bookmark:</p>
                <ul className="list-disc list-inside mt-[.5rem] max-w-[85%] m-auto">
                    <li>
                        <a className="text-[#5271ff]" href="https://www.freecodecamp.org/" alt="freecodecamp.org" target="_blank" rel="noreferrer">freeCodeCamp</a>
                    </li>
                    <li>
                        <a className="text-[#5271ff]" href="https://github.com/" alt="github.com" target="_blank" rel="noreferrer">GitHub</a>
                    </li>
                    <li>
                        <a className="text-[#5271ff]" href="https://education.github.com/pack/offers" alt="education.github.com" target="_blank" rel="noreferrer">GitHub Student Pack </a>
                        <p className="italic ml-[1.5rem]">(this one is only relevant if you have had a developer pack link sent to you and activated it)</p>
                    </li>
                    <li>
                        <a className="text-[#5271ff]" href="https://miro.com/" alt="miro.com" target="_blank" rel="noreferrer">Miro</a>
                    </li>
                    <li>
                        <a className="text-[#5271ff]" href="https://figma.com" alt="figma.com" target="_blank" rel="noreferrer">Figma</a>
                    </li>
                    <li>
                        <a className="text-[#5271ff]" href="https://netflify.com" alt="netlify.com" target="_blank" rel="noreferrer">Netlify</a>
                    </li>
                </ul>
            </div>

        </div>
    )

}

export default Instructions;