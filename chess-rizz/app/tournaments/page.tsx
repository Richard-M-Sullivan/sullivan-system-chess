export default function TournamentsPage() {
    return (
    <>
    <div className="flex flex-wrap gap-8">
        <section className="bg-chess-bg-light flex grow flex-col gap-8 border-2 border-chess-bg-dark rounded-xl">
            <div>
                <h1>Set up your tournament</h1>

                <div>
                    <label>Tournament name</label>
                    <input id="tournamentName"
                           className="border border-black"
                           placeholder="summer rapid"></input>
                    
                    <br />
                    <label>Tournament format</label>
                    <div>
                        <button className="border border-black">Swiss</button>
                        <button className="border border-black">Round-robin</button>
                        <button className="border border-black">Bracket</button>
                    </div>
                </div>
            </div>

            <div className="">
                <h1>Add your players</h1>

                <div>
                    <label>Player name</label>
                    <input className="border border-black" id="playerName" placeholder="john doe"></input>
                    <br />
                    <label>Rating</label>
                    <input className="border border-black" id="rating" placeholder="1200"></input>
                    <br />
                    <button className="border border-black">+ Add player</button>
                </div>
            </div>

            <div className="">
                <h1>Player list</h1>

                <div>
                    <ol>
                        <li className="border border-black">players</li>
                    </ol>
                </div>
            </div>

            <button className="border border-black">Create tournament</button>
        </section>
        
        <section className=" flex grow flex-col gap-8 bg-chess-bg-light border-2 border-chess-bg-dark rounded-xl">
            <h1>My Tournaments</h1>
            <ul>
                <li className="border border-black">summer rapid</li>
                <li className="border border-black">summer rapid</li>
                <li className="border border-black">summer rapid</li>
            </ul>
        </section>
    </div>
    </>
    )
}
