import Link from "next/link";

function Instructions({pagefor, gitname, gitlink, gitstep}) {

    return (
        <div className="instructions-container">
            <h1>{pagefor}</h1>
            <div className="vscode">
                <h2>VS Code (or your IDE of choice)</h2>
                <h3>Instructions below will be for VS Code as this is the IDE I know and use - I imagine they'll be somewhat similar for other IDEs, but yeah good luck!</h3>
                
                <a href="https://code.visualstudio.com/download" alt="link to visualstudio.com download" target="_blank" rel="noreferrer">
                    https://code.visualstudio.com/download
                </a>

                <ul>
                    <li>Click on your operating system to start the download</li>
                    <li>Unzip the download and follow the installation instructions</li>
                    <li>Open the program once the installation has completed</li>
                    <li>On the left-hand side of the page, click on the Extensions icon (icon with 4 squares) and in the search bar, search and add:</li>
                    
                    <ul>
                        <li>School of Code Extension Pack (this has lots of things already bundled together to make our lives easier - thank you School of Code!)</li>
                        <li>Prettier (code formatter)</li>
                        <li>LiveShare (allows remote collaboration with others)</li>
                    </ul>

                    <li>If you use it, set up AutoSave as this will not function automatically</li>
                </ul>
            </div>

            <div className="gitbash">
                <h2>{gitname}</h2>
                    
                <a href={gitlink} alt="link to bash command line download" target="_blank" rel="noreferrer">
                    {gitlink}
                </a>

                <ul>
                    <li>{gitstep}</li>
                    <li>Open VS Code - open a terminal</li>
                    <li>On the right-hand side of the terminal, click on the down arrow next to the '+' button and select Git Bash</li>
                    <ul>
                        <li>To check the version of Git/Bash type: 'git --version' or 'bash --version'</li>
                        <li>NB. If you have a problem when running these, make sure you fully exit VS Code and then reopen to try again, which should allow the above prompts to run correctly</li>
                    </ul>
                </ul>
            </div>

            <div className="node">
                <h2>Node.js (allows devs to use JavaScript to write Server-Side scripts)</h2>
                
                <a href="https://nodejs.org/en/download/" alt="link to nodejs.org download" target="_blank" rel="noreferrer">
                    https://nodejs.org/en/download/
                </a>

                <ul>
                    <li>Once downloaded, follow the installation instructions</li>
                    <li>Once installed you can check the version of Node by typing 'node --v' into the terminal on VS Code</li>
                    <ul>
                        <li>You can also check the NPM version using 'npm -v'</li>
                    </ul>
                    <li>A little test to see if Node is working: type 'node' to access Node.js from your terminal, then type: console.log("This is working") - this should print to your terminal</li>
                    <ul>
                        <li>NB. Again, if you have any issues with the above instructions not working in VS Code following installation, please make sure you fully exit and restart VS Code before attempting again</li>
                    </ul>
                </ul>
            </div>

            <div className="other-tips">
                <p>Password Manager - if you use a password manager, go grab that and set it up.<br></br>No links here because who knows what you might be using...</p>

                <p>Browser Extensions - examples here relate to Chrome (as that's what I know and use) but I imagine they're similar on other browsers and will at least act as reminders that you might want to sort them out if you use any:</p>
                <a href="https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh" alt="json viewer link" target="_blank" rel="noreferrer">JSON Viewer</a>
                <a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en" alt="React developer tools link" target="_blank" rel="noreferrer">React Developer Tools</a>

                <p>Bookmarks - here are just a few suggestions for sites you might want to (re)bookmark:</p>
                <ul>
                    <li>
                        <a href="https://www.freecodecamp.org/" alt="freecodecamp.org" target="_blank" rel="noreferrer">freeCodeCamp</a>
                    </li>
                    <li>
                        <a href="https://github.com/" alt="github.com" target="_blank" rel="noreferrer">GitHub</a>
                    </li>
                    <li>
                        <a href="https://education.github.com/pack/offers" alt="education.github.com" target="_blank" rel="noreferrer">GitHub Student Pack</a>
                        <p>(this one is only relevant if you have had a developer pack link sent to you and activated it)</p>
                    </li>
                    <li>
                        <a href="https://miro.com/" alt="miro.com" target="_blank" rel="noreferrer">Miro</a>
                    </li>
                    <li>
                        <a href="https://figma.com" alt="figma.com" target="_blank" rel="noreferrer">Figma</a>
                    </li>
                    <li>
                        <a href="https://netflify.com" alt="netlify.com" target="_blank" rel="noreferrer">Netlify</a>
                    </li>
                </ul>
            </div>

        </div>
    )

}

export default Instructions;