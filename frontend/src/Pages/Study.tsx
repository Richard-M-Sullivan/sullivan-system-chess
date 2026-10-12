import ChessBoard from '../Components/ChessBoard';
import Footer from '../Components/Footer';
import Nav from '../Components/Nav';
import PageShell from '../Components/PageShell';

function OpeningStudy() {
  return (
    <>
      <Nav />
      <PageShell>
        <section className="page-intro">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              BUILD YOUR CHESS KNOWLEDGE
            </div>
            <h1>
              Think a move <span className="highlight">ahead.</span>
            </h1>
            <p className="intro-copy">
              Explore a position, walk through a line, and keep the ideas you
              want to remember in one place.
            </p>
          </div>
          <div className="intro-piece" aria-hidden="true">
            <span>♞</span>
            <small>
              LEARN THE
              <br />
              IDEAS BEHIND MOVES
            </small>
          </div>
        </section>
        <div className="study-layout">
          <section className="board-panel">
            <div className="board-top">
              <div>
                <span className="step-label">STUDY BOARD</span>
                <h2>Queen's Gambit · Main line</h2>
              </div>
              <div className="board-controls">
                <button
                  className="icon-button"
                  type="button"
                  aria-label="Previous move"
                >
                  ←
                </button>
                <button
                  className="icon-button"
                  type="button"
                  aria-label="Next move"
                >
                  →
                </button>
                <button
                  className="icon-button"
                  type="button"
                  aria-label="Flip board"
                >
                  ↻
                </button>
              </div>
            </div>
            <ChessBoard />
            <div className="summary-divider"></div>
            <div className="section-heading" style={{ marginBottom: '0' }}>
              <div>
                <span className="step-label">LINE EXPLORER</span>
                <p style={{ marginTop: '7px' }}>
                  A visual mockup of your current move sequence.
                </p>
              </div>
              <span className="demo-chip">DEMO POSITION</span>
            </div>
          </section>
          <section className="study-notes">
            <div>
              <span className="step-label">YOUR STUDY NOTES</span>
              <h2>Save the idea, not just the move.</h2>
              <p className="study-notes-intro">
                Write down plans, tactical ideas, and reminders for this
                opening. The sample notes below are here to show how your
                workspace could look.
              </p>
            </div>
            <div>
              <label className="study-label" htmlFor="studyTitle">
                Study title
              </label>
              <input
                className="study-input"
                id="studyTitle"
                value="Queen's Gambit — central pressure"
              />
            </div>
            <div>
              <label className="study-label" htmlFor="moveInput">
                Move notation
              </label>
              <input
                className="study-input"
                id="moveInput"
                value="1. d4 d5 2. c4 e6"
                aria-label="Move notation"
              />
            </div>
            <div>
              <label className="study-label" htmlFor="notesArea">
                Notes
              </label>
              <textarea className="notes-area" id="notesArea">
                The Queen's Gambit puts immediate pressure on Black's d5 pawn. •
                If Black accepts with 2...dxc4, recover the pawn while
                developing. • In the declined line, build a strong center and
                develop the kingside pieces. • Watch for ...c5 breaks and avoid
                moving the same piece repeatedly. Reminder: understand the plan
                behind each move.
              </textarea>
              <div className="note-tags">
                <span className="note-tag"># opening prep</span>
                <span className="note-tag"># central control</span>
                <span className="note-tag">+ Add tag</span>
              </div>
            </div>
            <div className="study-actions">
              <p>Sample workspace · Notes are not saved in this concept.</p>
              <button className="button button-primary" type="button">
                Save study <span>↗</span>
              </button>
            </div>
          </section>
          <aside className="study-side-tip">
            <span className="step-label">STUDY TIP</span>
            <h3>Ask what each move is trying to achieve.</h3>
            <p>
              Connect the move order to a plan: central control, piece activity,
              king safety, or a concrete tactical idea.
            </p>
          </aside>
          <aside className="study-session">
            <h3>Study session</h3>
            <div className="session-line">
              <span>♟</span>
              <div>
                <strong>Opening fundamentals</strong>
                <small>12 min · Suggested review</small>
              </div>
            </div>
            <div className="session-line">
              <span>⌁</span>
              <div>
                <strong>3 key positions</strong>
                <small>Saved for this line</small>
              </div>
            </div>
            <div className="session-line">
              <span>✓</span>
              <div>
                <strong>Next step</strong>
                <small>Review Black's ...c5 break</small>
              </div>
            </div>
          </aside>
        </div>
      </PageShell>
      <Footer />
    </>
  );
}

export default OpeningStudy;
