import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>InsideCampus | Ask Real Students Anything</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ask real questions and get honest answers from verified students at top colleges. No fluff, just real talk." />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />
        <script async defer data-domain="insidecampus.com" src="https://plausible.io/js/script.js"></script>
      </Head>

      <nav className="container-fluid">
        <ul><li><strong>InsideCampus</strong></li></ul>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="#schools">Browse Schools</Link></li>
          <li><Link href="/login" role="button">Log in</Link></li>
        </ul>
      </nav>

      <main className="container">
        <header style={{ textAlign: 'center', padding: '4rem 1rem 2rem' }}>
          <h1>Ask Real Students Anything</h1>
          <p>Get real answers from verified students at top colleges. Anonymously submit questions and explore what campus life is really like.</p>
          <p><a href="#schools" role="button">Browse Schools</a></p>
        </header>

        <section id="schools">
          <h2 style={{ textAlign: 'center' }}>Explore Schools</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '2rem',
            justifyItems: 'center',
            padding: '2rem 0'
          }}>
            {["colby", "bowdoin", "umass", "middlebury", "stanford", "yale", "nyu"].map((school) => (
              <figure key={school} style={{ textAlign: 'center' }}>
                <img
                  src={`https://logo.clearbit.com/${school}.edu`}
                  alt={`${school} logo`}
                  style={{ width: '60px', height: '60px', borderRadius: '8px', objectFit: 'contain' }}
                />
                <figcaption>
                  <Link href={`/${school}`}>{school.charAt(0).toUpperCase() + school.slice(1)}</Link>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>

      <footer className="container">
        <small><a href="#">About</a> • <a href="#">Privacy</a></small>
      </footer>
    </>
  );
}
