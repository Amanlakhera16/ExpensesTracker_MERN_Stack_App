import './App.css';
import Graph from './components/Graph';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <div className="app-shell">
        <div className="ambient ambient-a" />
        <div className="ambient ambient-b" />
        <div className="ambient ambient-c" />

        <main className="container mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
          <section className="hero-card">
            <div className="hero-copy">
              <p className="eyebrow">Smart money for a new generation</p>
              <h1>Expense tracking that feels fast, clear, and alive.</h1>
              <p className="hero-text">
                A modern finance dashboard that helps people understand where
                money goes at a glance, with a cleaner flow and richer
                category colors.
              </p>
            </div>

            <div className="hero-pills" aria-label="Highlights">
              <div className="hero-pill">
                <span className="pill-label">Live overview</span>
                <strong>Instant updates</strong>
              </div>
              <div className="hero-pill">
                <span className="pill-label">Visual insight</span>
                <strong>Color coded spending</strong>
              </div>
              <div className="hero-pill">
                <span className="pill-label">Built for mobile</span>
                <strong>Responsive by design</strong>
              </div>
            </div>
          </section>

          <section className="dashboard-grid">
            <Graph />
            <Form />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
