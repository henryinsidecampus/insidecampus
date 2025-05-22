export default function Home() {
  return (
    <div style={{ padding: '2rem 4rem', fontFamily: 'Inter, sans-serif', lineHeight: '1.6' }}>
      
      {/* Logo / Header */}
      <header style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>InsideCampus</h1>
        <p style={{ color: '#555' }}>Real advice from real students — before you even step on campus.</p>
      </header>

      {/* School Selector */}
      <section style={{ marginBottom: '2.5rem' }}>
        <label htmlFor="school-select" style={{ fontWeight: 'bold' }}>Select your school:</label><br />
        <select
          id="school-select"
          onChange={(e) => {
            const school = e.target.value;
            if (school) {
              window.location.href = `/${school}`;
            }
          }}
          style={{ marginTop: '0.5rem', padding: '0.5rem', width: '100%', maxWidth: '300px' }}
        >
          <option value="">-- Choose a school --</option>
          <option value="colby">Colby College</option>
          <option value="bowdoin">Bowdoin College</option>
          <option value="umass">UMass Amherst</option>
        </select>
      </section>

      {/* Example Questions */}
      <section>
        <h2>See what students are asking…</h2>
        <ul>
          <li>What dorms are the nicest for first-years?</li>
          <li>Is it easy to switch majors once you’re on campus?</li>
          <li>How’s the social scene?</li>
        </ul>
      </section>

      {/* Footer */}
      <footer style={{ marginTop: '4rem', borderTop: '1px solid #ccc', paddingTop: '1rem', fontSize: '0.9rem', color: '#777' }}>
        <p>InsideCampus © {new Date().getFullYear()} | <a href="#">About</a> | <a href="#">Privacy</a> | <a href="#">Contact</a></p>
      </footer>
    </div>
  );
}
