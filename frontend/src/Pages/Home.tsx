import Footer from "../Components/Footer"
import Nav from "../Components/Nav"
import PageShell from "../Components/PageShell"
import ChessBoard from "../Components/ChessBoard"
import Hero from "../Components/Hero"

import "../assets/chess-rizz-logo.svg";

function Home() {
    return (
    <>
    <Nav />
    <PageShell>
        <section className="hero page-shell">
        <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot"></span> YOUR NEXT MOVE STARTS HERE</div>
            <h1>Make every<br/>move <span className="highlight">count.</span></h1>
            <p className="hero-description">From your first tournament pairing to your next opening breakthrough, everything you need to level up your chess lives in one place.</p>
            <div className="hero-actions">
            <a className="button button-primary" href="#tournaments">Create a tournament <span aria-hidden="true">↗</span></a>
            <a className="button button-secondary" href="#study"><span className="play-icon" aria-hidden="true">▶</span> Explore study tools</a>
            </div>
            <div className="social-proof">
            <div className="avatar-stack" aria-hidden="true"><span>♟</span><span>♞</span><span>♜</span><span>+</span></div>
            <p><strong>Built for the chess community</strong><br/><span>Organize. Analyze. Improve.</span></p>
            </div>
        </div>

        <div className="hero-art" aria-label="Decorative chessboard illustration">
            <Hero src={"chess-rizz-logo.svg"} />
        </div>
        </section>

        <section className="features page-shell" aria-labelledby="features-title">
        <div className="section-heading">
            <div><div className="eyebrow">YOUR CHESS TOOLKIT</div><h2 id="features-title">A smarter way to play.</h2></div>
            <p>Less admin. Better insights.<br/>More time at the board.</p>
        </div>
        <div className="feature-grid">
            <a className="feature-card feature-green" id="tournaments" href="#tournaments">
            <div className="feature-top"><span className="feature-icon">♟</span><span className="card-arrow">↗</span></div>
            <h3>Tournaments</h3>
            <p>Create events, manage players, and keep pairings running smoothly from round one to the final.</p>
            <span className="feature-foot">Run your next event <span>→</span></span>
            <div className="mini-board mini-board-tournament" aria-hidden="true"><span>♜</span><span>♞</span><span>♝</span><span>♛</span><span>♚</span><span>♝</span><span>♞</span><span>♜</span></div>
            </a>
            <a className="feature-card feature-lilac" id="statistics" href="#statistics">
            <div className="feature-top"><span className="feature-icon">⌁</span><span className="card-arrow">↗</span></div>
            <h3>Opening statistics</h3>
            <p>Find out what works. Explore your results by opening, color, and position to spot your edge.</p>
            <span className="feature-foot">Find your patterns <span>→</span></span>
            <div className="chart-art" aria-hidden="true"><span style={{"height":"36%"}}></span><span style={{"height":"58%"}}></span><span style={{"height":"44%"}}></span><span style={{"height":"78%"}}></span><span style={{"height":"63%"}}></span><span style={{"height":"92%"}}></span><span style={{"height":"72%"}}></span></div>
            </a>
            <a className="feature-card feature-peach" id="study" href="#study">
            <div className="feature-top"><span className="feature-icon">✳</span><span className="card-arrow">↗</span></div>
            <h3>Opening study</h3>
            <p>Build a repertoire, practice key lines, and turn the openings you love into habits you trust.</p>
            <span className="feature-foot">Train your openings <span>→</span></span>
            <div className="study-art" aria-hidden="true"><span>e4</span><span>e5</span><span>Nf3</span><span>Nc6</span></div>
            </a>
        </div>
        </section>

        <section className="bottom-cta page-shell" id="login">
        <div><div className="eyebrow">READY WHEN YOU ARE</div><h2>Bring your next move to life.</h2><p>Your chess journey deserves a better home.</p></div>
        <a className="button button-primary" href="#login">Get started <span aria-hidden="true">↗</span></a>
        </section>
    </PageShell>

    <Footer />
    </>
    )
}

export default Home