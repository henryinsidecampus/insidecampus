import React from 'react';
import Link from 'next
  import Head from 'next/head';/link';

export default function HomePage() {
  const handleSchoolChange = (e) => {
    const school = e.target.value;
    if (school) {
      window.location.href = `/${school}`;
    }
  };

  return (
    <div
      style={{
        fontFamily: 'Inter, sans-serif',
        backgroundColor: '#F9FAFB',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
  
      <Head>
        <title>InsideCampus – Home</title>
        <meta name="description" content="Student-powered Q&A hub for real campus insights." />
      </Head>
{/* Sticky Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          backgroundColor: '#F9FAFB',
          zIndex: 1000,
          padding: '1rem 1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
        }}
      >
        <h1 style={{ color: '#3A86FF', fontSize: '1.25rem', fontWeight: 700 }}>InsideCampus</h1>
        <Link href="#school-selector" passHref>
          <a
            style={{
              backgroundColor: '#FF8C66',
              color: '#fff',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Explore Schools
          </a>
        </Link>
      </header>

      {/* Hero */}
      <section style={{ padding: '3rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#111' }}>
          Real questions. Honest answers. No BS.
        </h2>
        <p style={{ marginTop: '1rem', fontSize: '1.125rem', color: '#444' }}>
          InsideCampus is the student-powered Q&A hub where you get the unfiltered scoop before you step on campus.
        </p>
        <Link href="#school-selector" passHref>
          <a
            style={{
              marginTop: '2rem',
              display: 'inline-block',
              backgroundColor: '#3A86FF',
              color: '#fff',
              padding: '0.75rem 1.5rem',
              borderRadius: '8px',
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Start Exploring
          </a>
        </Link>
      </section>

      {/* School Selector */}
      <section
        id="school-selector"
        style={{
          padding: '2rem 1.5rem',
          maxWidth: '480px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <label htmlFor="school" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>
          Choose your school:
        </label>
        <select
          id="school"
          onChange={handleSchoolChange}
          style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem',
          }}
        >
          <option value="">-- Select a school --</option>
          <option value="colby">Colby</option>
          <option value="bowdoin">Bowdoin</option>
          <option value="umass">UMass</option>
          <option value="middlebury">Middlebury</option>
          <option value="stanford">Stanford</option>
          <option value="yale">Yale</option>
          <option value="nyu">NYU</option>
          <option value="uncchapelhill">UNC Chapel Hill</option>
        </select>
      </section>

      {/* Testimonial */}
      <section
        style={{
          padding: '3rem 1.5rem',
          backgroundColor: '#fff',
          textAlign: 'center',
          flex: '1',
        }}
      >
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#111' }}>
          What Students Are Saying
        </h3>
        <blockquote
          style={{
            marginTop: '1rem',
            fontStyle: 'italic',
            color: '#555',
            maxWidth: '640px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          "InsideCampus gave me the real tea on dorm life before I even packed my bags!"
        </blockquote>
      </section>

      {/* Footer */}
      <footer style={{ padding: '2rem 1.5rem', textAlign: 'center', fontSize: '0.875rem', color: '#555' }}>
        <Link href="/about" passHref>
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/privacy" passHref>
          <a>Privacy</a>
        </Link>{' '}
        |{' '}
        <Link href="/contact" passHref>
          <a>Contact</a>
        </Link>
      </footer>
    </div>
  );
}
