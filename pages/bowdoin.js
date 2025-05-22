export default function BowdoinPage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Inter, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Bowdoin College Q&A Hub</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Real, anonymous questions answered by verified Bowdoin students.
      </p>

      <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3 style={{ marginBottom: '0.5rem' }}>Ask a Question</h3>
        <textarea
          placeholder="What do you want to know about Bowdoin?"
          style={{
            width: '100%',
            padding: '0.75rem',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '1rem',
            minHeight: '100px',
          }}
        ></textarea>
        <button
          style={{
            marginTop: '0.75rem',
            padding: '0.6rem 1.2rem',
            backgroundColor: '#3A86FF',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Post Question
        </button>
      </div>

      <div>
        <h3>Recent Questions</h3>

        <div style={{ marginBottom: '1.5rem', padding: '1rem', border: '1px solid #eee', borderRadius: '6px' }}>
          <p style={{ fontWeight: 'bold' }}>How’s the party scene on weekends?</p>
          <p style={{ margin: '0.5rem 0' }}>“Bowdoin House parties are chill. Mostly house-based or sports teams.”</p>
          <div style={{ fontSize: '0.9rem', color: '#777' }}>
            Answered by <strong>Bowdoin '25</strong> • <span>↑ 10</span>
          </div>
        </div>

        <div style={{ marginBottom: '1.5rem', padding: '1rem', border: '1px solid #eee', borderRadius: '6px' }}>
          <p style={{ fontWeight: 'bold' }}>Is Bowdoin super academically intense?</p>
          <p style={{ margin: '0.5rem 0' }}>“It’s rigorous but collaborative. Professors are approachable.”</p>
          <div style={{ fontSize: '0.9rem', color: '#777' }}>
            Answered by <strong>Bowdoin '26</strong> • <span>↑ 8</span>
          </div>
        </div>
      </div>
    </div>
  );
}
