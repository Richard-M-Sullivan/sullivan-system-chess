import Footer from '../Components/Footer';
import Nav from '../Components/Nav';
import PageShell from '../Components/PageShell';

function Statistics() {
  return (
    <>
      <Nav />
      <PageShell>
        <section className="page-intro">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-dot"></span> YOUR GAME, IN NUMBERS
            </div>
            <h1>
              Know your <span className="highlight">openings.</span>
            </h1>
            <p className="intro-copy">
              A quick look at the openings you play most, how they perform, and
              which variations are working for you.
            </p>
          </div>
          <div className="intro-piece" aria-hidden="true">
            <span>♟</span>
            <small>
              REVIEW THE
              <br />
              POSITION
            </small>
          </div>
        </section>
        <div className="stats-layout">
          <section className="content-panel">
            <div className="section-heading">
              <div>
                <span className="step-label">OPENING PERFORMANCE</span>
                <h2>Your opening repertoire</h2>
                <p>
                  Sample results from your recent games. Expand an opening to
                  explore its variations.
                </p>
              </div>
              <span className="demo-chip">SAMPLE DATA</span>
            </div>
            <div className="stat-summary">
              <div className="stat-tile">
                <span>Games reviewed</span>
                <strong>248</strong>
                <small>↗ 18 this month</small>
              </div>
              <div className="stat-tile">
                <span>Overall win rate</span>
                <strong>54.8%</strong>
                <small>Across all openings</small>
              </div>
              <div className="stat-tile">
                <span>Openings played</span>
                <strong>12</strong>
                <small>Top 5 shown below</small>
              </div>
            </div>
            <div className="opening-list">
              <details className="opening-card" open>
                <summary className="opening-summary">
                  <span className="opening-name">
                    <span className="opening-glyph">♞</span>
                    <span>
                      <strong>Sicilian Defense</strong>
                      <small>1. e4 c5 · Black</small>
                    </span>
                  </span>
                  <span className="opening-stat">
                    <span>WIN RATE</span>
                    <strong>58.2%</strong>
                    <span className="winbar">
                      <i style={{ width: '58.2%' }}></i>
                    </span>
                  </span>
                  <span className="opening-stat">
                    <span>GAMES</span>
                    <strong>67</strong>
                  </span>
                  <span className="opening-chevron">⌄</span>
                </summary>
                <div className="opening-variations">
                  <div className="variation-header">
                    <span>Variation</span>
                    <span style={{ textAlign: 'right' }}>Win rate</span>
                    <span style={{ textAlign: 'right' }}>Games</span>
                  </div>
                  <div className="variation-row">
                    <span>
                      Najdorf Variation<small>5. ... a6</small>
                    </span>
                    <span className="variation-win">62.5%</span>
                    <span className="variation-games">24 games</span>
                  </div>
                  <div className="variation-row">
                    <span>
                      Classical Variation<small>2. ... Nc6</small>
                    </span>
                    <span className="variation-win">55.6%</span>
                    <span className="variation-games">18 games</span>
                  </div>
                  <div className="variation-row">
                    <span>
                      Dragon Variation<small>... g6 and ... Bg7</small>
                    </span>
                    <span className="variation-win">48.0%</span>
                    <span className="variation-games">25 games</span>
                  </div>
                </div>
              </details>
              <details className="opening-card">
                <summary className="opening-summary">
                  <span className="opening-name">
                    <span className="opening-glyph">♙</span>
                    <span>
                      <strong>Queen's Gambit</strong>
                      <small>1. d4 d5 2. c4 · White</small>
                    </span>
                  </span>
                  <span className="opening-stat">
                    <span>WIN RATE</span>
                    <strong>61.4%</strong>
                    <span className="winbar">
                      <i style={{ width: '61.4%' }}></i>
                    </span>
                  </span>
                  <span className="opening-stat">
                    <span>GAMES</span>
                    <strong>44</strong>
                  </span>
                  <span className="opening-chevron">⌄</span>
                </summary>
                <div className="opening-variations">
                  <div className="variation-header">
                    <span>Variation</span>
                    <span style={{ textAlign: 'right' }}>Win rate</span>
                    <span style={{ textAlign: 'right' }}>Games</span>
                  </div>
                  <div className="variation-row">
                    <span>
                      Accepted<small>2. ... dxc4</small>
                    </span>
                    <span className="variation-win">57.1%</span>
                    <span className="variation-games">14 games</span>
                  </div>
                  <div className="variation-row">
                    <span>
                      Declined · Orthodox<small>3. ... Nf6</small>
                    </span>
                    <span className="variation-win">66.7%</span>
                    <span className="variation-games">18 games</span>
                  </div>
                  <div className="variation-row">
                    <span>
                      Slav Defense<small>2. ... c6</small>
                    </span>
                    <span className="variation-win">58.3%</span>
                    <span className="variation-games">12 games</span>
                  </div>
                </div>
              </details>
              <details className="opening-card">
                <summary className="opening-summary">
                  <span className="opening-name">
                    <span className="opening-glyph">♜</span>
                    <span>
                      <strong>Italian Game</strong>
                      <small>1. e4 e5 2. Nf3 Nc6 3. Bc4 · White</small>
                    </span>
                  </span>
                  <span className="opening-stat">
                    <span>WIN RATE</span>
                    <strong>53.1%</strong>
                    <span className="winbar">
                      <i style={{ width: '53.1%' }}></i>
                    </span>
                  </span>
                  <span className="opening-stat">
                    <span>GAMES</span>
                    <strong>49</strong>
                  </span>
                  <span className="opening-chevron">⌄</span>
                </summary>
                <div className="opening-variations">
                  <div className="variation-header">
                    <span>Variation</span>
                    <span style={{ textAlign: 'right' }}>Win rate</span>
                    <span style={{ textAlign: 'right' }}>Games</span>
                  </div>
                  <div className="variation-row">
                    <span>
                      Giuoco Piano<small>3. ... Bc5</small>
                    </span>
                    <span className="variation-win">59.3%</span>
                    <span className="variation-games">27 games</span>
                  </div>
                  <div className="variation-row">
                    <span>
                      Two Knights Defense<small>3. ... Nf6</small>
                    </span>
                    <span className="variation-win">45.5%</span>
                    <span className="variation-games">22 games</span>
                  </div>
                </div>
              </details>
              <details className="opening-card">
                <summary className="opening-summary">
                  <span className="opening-name">
                    <span className="opening-glyph">♝</span>
                    <span>
                      <strong>French Defense</strong>
                      <small>1. e4 e6 · Black</small>
                    </span>
                  </span>
                  <span className="opening-stat">
                    <span>WIN RATE</span>
                    <strong>51.7%</strong>
                    <span className="winbar">
                      <i style={{ width: '51.7%' }}></i>
                    </span>
                  </span>
                  <span className="opening-stat">
                    <span>GAMES</span>
                    <strong>29</strong>
                  </span>
                  <span className="opening-chevron">⌄</span>
                </summary>
                <div className="opening-variations">
                  <div className="variation-header">
                    <span>Variation</span>
                    <span style={{ textAlign: 'right' }}>Win rate</span>
                    <span style={{ textAlign: 'right' }}>Games</span>
                  </div>
                  <div className="variation-row">
                    <span>
                      Advance Variation<small>3. e5</small>
                    </span>
                    <span className="variation-win">55.0%</span>
                    <span className="variation-games">20 games</span>
                  </div>
                  <div className="variation-row">
                    <span>
                      Exchange Variation<small>3. exd5</small>
                    </span>
                    <span className="variation-win">44.4%</span>
                    <span className="variation-games">9 games</span>
                  </div>
                </div>
              </details>
              <details className="opening-card">
                <summary className="opening-summary">
                  <span className="opening-name">
                    <span className="opening-glyph">♛</span>
                    <span>
                      <strong>King's Indian Defense</strong>
                      <small>1. d4 Nf6 2. c4 g6 · Black</small>
                    </span>
                  </span>
                  <span className="opening-stat">
                    <span>WIN RATE</span>
                    <strong>47.5%</strong>
                    <span className="winbar">
                      <i style={{ width: '47.5%' }}></i>
                    </span>
                  </span>
                  <span className="opening-stat">
                    <span>GAMES</span>
                    <strong>40</strong>
                  </span>
                  <span className="opening-chevron">⌄</span>
                </summary>
                <div className="opening-variations">
                  <div className="variation-header">
                    <span>Variation</span>
                    <span style={{ textAlign: 'right' }}>Win rate</span>
                    <span style={{ textAlign: 'right' }}>Games</span>
                  </div>
                  <div className="variation-row">
                    <span>
                      Sämisch Variation<small>5. f3</small>
                    </span>
                    <span className="variation-win">50.0%</span>
                    <span className="variation-games">16 games</span>
                  </div>
                  <div className="variation-row">
                    <span>
                      Classical Variation<small>5. Nf3</small>
                    </span>
                    <span className="variation-win">45.8%</span>
                    <span className="variation-games">24 games</span>
                  </div>
                </div>
              </details>
            </div>
          </section>
          <aside className="side-stat">
            <section className="performance-card">
              <span className="step-label">RECENT FORM</span>
              <h3 style={{ marginTop: '8px' }}>Your last 8 weeks</h3>
              <div
                className="mini-chart"
                aria-label="Illustrative weekly win-rate bar chart"
              >
                <span style={{ height: '42%' }}></span>
                <span style={{ height: '55%' }}></span>
                <span style={{ height: '49%' }}></span>
                <span style={{ height: '68%' }}></span>
                <span style={{ height: '59%' }}></span>
                <span style={{ height: '76%' }}></span>
                <span style={{ height: '65%' }}></span>
                <span style={{ height: '86%' }}></span>
              </div>
              <div className="chart-labels">
                <span>8 weeks ago</span>
                <span>This week</span>
              </div>
              <div className="summary-divider"></div>
              <div className="performance-row">
                <span>Best opening</span>
                <strong>Queen's Gambit</strong>
              </div>
              <div className="performance-row">
                <span>Most played</span>
                <strong>Sicilian Defense</strong>
              </div>
              <div className="performance-row">
                <span>Focus area</span>
                <strong>King's Indian</strong>
              </div>
            </section>
            <section className="tip-card">
              <span className="tip-icon">✦</span>
              <div>
                <span className="step-label">READ THE NUMBERS</span>
                <h3>Win rate is a clue, not the whole story.</h3>
                <p>
                  Look at game count and variation-level results together. A
                  small sample can swing quickly.
                </p>
              </div>
            </section>
            <div className="privacy-note">
              <span>⌑</span>
              <p>
                <strong>Your game, your growth.</strong>
                <br />
                Use your opening trends to decide what to review next.
              </p>
            </div>
          </aside>
        </div>
      </PageShell>

      <Footer />
    </>
  );
}

export default Statistics;
