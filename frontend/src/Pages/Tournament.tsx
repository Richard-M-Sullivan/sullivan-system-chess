import Footer from '../Components/Footer';
import Nav from '../Components/Nav';
import PageShell from '../Components/PageShell';

function Tournaments() {
  return (
    <>
      <Nav />
      <PageShell>
        <section className="page-intro">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot"></span> TOURNAMENT HQ
            </div>
            <h1>
              Make it a <span className="highlight">match.</span>
            </h1>
            <p className="intro-copy">
              Set up your event, add your players, and get your next tournament
              ready to go.
            </p>
          </div>
          <div className="intro-piece" aria-hidden="true">
            <span>♞</span>
            <small>
              YOUR NEXT
              <br />
              ROUND STARTS HERE
            </small>
          </div>
        </section>
        <div className="workspace">
          <form className="setup-panel" id="tournamentForm">
            <div className="panel-heading">
              <div>
                <span className="step-label">01 / EVENT DETAILS</span>
                <h2>Set up your tournament</h2>
              </div>
              <span className="heading-icon">✳</span>
            </div>
            <div className="field">
              <label htmlFor="tournamentName">
                Tournament name <span className="required">*</span>
              </label>
              <input
                id="tournamentName"
                type="text"
                placeholder="e.g. Friday Night Blitz"
                max-length="80"
                required
              />
              <small>Give your event a name players will recognize.</small>
            </div>
            <fieldset className="format-field">
              <legend>
                Tournament format <span className="required">*</span>
              </legend>
              <div className="format-options">
                <label className="format-option selected">
                  <input type="radio" name="format" value="swiss" checked />
                  <span className="format-symbol">♟</span>
                  <span className="format-name">Swiss</span>
                  <span className="format-description">
                    Players face opponents with similar scores.
                  </span>
                </label>
                <label className="format-option">
                  <input type="radio" name="format" value="round-robin" />
                  <span className="format-symbol">↻</span>
                  <span className="format-name">Round robin</span>
                  <span className="format-description">
                    Everyone plays every other player.
                  </span>
                </label>
                <label className="format-option">
                  <input type="radio" name="format" value="bracket" />
                  <span className="format-symbol">⑂</span>
                  <span className="format-name">Bracket</span>
                  <span className="format-description">
                    Players advance through elimination rounds.
                  </span>
                </label>
              </div>
            </fieldset>
            <div className="player-heading">
              <div>
                <span className="step-label">02 / PLAYER ROSTER</span>
                <h2>
                  Add your players{' '}
                  <span className="player-count" id="playerCount">
                    0
                  </span>
                </h2>
              </div>
              <p>
                Add players manually or look up an existing Chess Rizz account.
              </p>
            </div>
            <div className="add-player-card">
              <div className="player-fields">
                <div className="field name-field">
                  <label htmlFor="playerName">
                    Player name <span className="required">*</span>
                  </label>
                  <div className="name-input-wrap">
                    <input
                      id="playerName"
                      type="text"
                      placeholder="Enter player name"
                      max-length="60"
                      autoComplete="off"
                    />
                    <button
                      className="account-search"
                      type="button"
                      id="accountSearch"
                      aria-haspopup="dialog"
                    >
                      ♙ <span>Find account</span>
                    </button>
                  </div>
                </div>
                <div className="field rating-field">
                  <label htmlFor="playerRating">Rating</label>
                  <input
                    id="playerRating"
                    type="number"
                    min="0"
                    max="4000"
                    step="1"
                    placeholder="Unrated"
                  />
                </div>
              </div>
              <div className="add-player-bottom">
                <p>
                  <span className="tiny-check">✓</span> No account? Add them as
                  a guest player.
                </p>
                <button
                  className="button button-primary add-button"
                  type="button"
                  id="addPlayer"
                >
                  + Add player
                </button>
              </div>
              <p
                className="form-message"
                id="formMessage"
                role="status"
                aria-live="polite"
              ></p>
            </div>
            <div className="roster-section">
              <div className="roster-title">
                <h3>Player list</h3>
                <span id="rosterSummary">No players added yet</span>
              </div>
              <div className="empty-state" id="emptyState">
                <span className="empty-piece">♙</span>
                <strong>Your roster starts here</strong>
                <p>Add players above to build your tournament lineup.</p>
              </div>
              <div
                className="roster-list"
                id="rosterList"
                aria-live="polite"
              ></div>
            </div>
            <div className="form-footer">
              <p>
                <span className="required">*</span> Required fields
              </p>
              <button
                className="button button-primary create-button"
                type="submit"
              >
                Create tournament <span>↗</span>
              </button>
            </div>
          </form>
          <aside className="side-column">
            <section className="summary-card">
              <div className="summary-top">
                <span className="step-label">LIVE PREVIEW</span>
                <span className="live-dot"></span>
              </div>
              <h2 id="previewName">Your tournament</h2>
              <p className="preview-caption">Tournament overview</p>
              <div className="summary-divider"></div>
              <div className="summary-row">
                <span>Format</span>
                <strong id="previewFormat">Swiss</strong>
              </div>
              <div className="summary-row">
                <span>Players</span>
                <strong id="previewPlayers">0 players</strong>
              </div>
              <div className="summary-row">
                <span>Rated players</span>
                <strong id="previewRated">0</strong>
              </div>
              <div className="summary-divider"></div>
              <div className="readiness">
                <span className="readiness-icon">✦</span>
                <div>
                  <strong id="readinessTitle">Ready when you are</strong>
                  <p id="readinessText">
                    Name your tournament and add at least one player to get
                    started.
                  </p>
                </div>
              </div>
            </section>
            <section className="tip-card">
              <span className="tip-icon">♜</span>
              <div>
                <span className="step-label">QUICK TIP</span>
                <h3>Good pairings start with good data.</h3>
                <p>
                  Adding ratings helps you seed your event and gives you a
                  clearer picture of the field.
                </p>
              </div>
            </section>
            <div className="privacy-note">
              <span>⌑</span>
              <p>
                <strong>You're in control.</strong>
                <br />
                Guest players don't need an account to join your roster.
              </p>
            </div>
          </aside>
        </div>
        <section className="result-panel" id="resultPanel" hidden role="status">
          <span className="result-icon">✓</span>
          <div>
            <h2 id="resultTitle">Tournament draft created</h2>
            <p id="resultDescription"></p>
            <pre id="resultData"></pre>
          </div>
          <button
            type="button"
            className="close-result"
            id="closeResult"
            aria-label="Dismiss result"
          >
            ×
          </button>
        </section>
      </PageShell>

      <footer className="site-footer page-shell">
        <a className="brand footer-brand" href="index.html">
          <span className="brand-mark">♞</span>
          <span>
            chess<span className="brand-accent">rizz</span>
          </span>
        </a>
        <span>Made for the love of the game.</span>
        <span>
          © <span id="year"></span> Chess Rizz
        </span>
      </footer>
      <dialog
        className="account-dialog"
        id="accountDialog"
        aria-labelledby="accountDialogTitle"
      >
        <form method="dialog" className="dialog-close-form">
          <button className="dialog-close" aria-label="Close account search">
            ×
          </button>
        </form>
        <div className="eyebrow">CHESS RIZZ MEMBERS</div>
        <h2 id="accountDialogTitle">Find a player account</h2>
        <p className="dialog-description">
          Search the account directory and add a member to your roster.
        </p>
        <label className="search-label" htmlFor="accountQuery">
          Account name
        </label>
        <div className="search-row">
          <input
            id="accountQuery"
            type="search"
            placeholder="Search usernames…"
            autoComplete="off"
          />
          <button
            type="button"
            className="button button-primary"
            id="searchAccounts"
          >
            Search
          </button>
        </div>
        <div className="account-results" id="accountResults" aria-live="polite">
          <p className="search-hint">
            Enter a name to search. Demo accounts are available to preview this
            interaction.
          </p>
        </div>
        <p className="demo-note">
          Demo mode: these are sample accounts, not a live user directory.
        </p>
      </dialog>

      <Footer />
    </>
  );
}

export default Tournaments;
