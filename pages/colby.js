export default function ColbyPage() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Inter, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      
      {/* Header */}
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Colby College Q&A Hub</h1>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        Real, anonymous questions answered by verified Colby students.
      </p>

      {/* Ask a Question Box */}
      <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h3 style={{ marginBottom: '0.5rem' }}>Ask a Question</h3>
        <textarea
          placeholder="What do you want to know about Colby?"
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

      {/* Q&A Feed */}
      <div>
        <h3>Recent Questions</h3>

        {/* Q1 */}
        <div style={{ marginBottom: '1.5rem', padding: '1rem', border: '1px solid #eee', borderRadius: '6px' }}>
          <p style={{ fontWeight: 'bold' }}>What’s the best dorm for first-years?</p>
          <p style={{ margin: '0.5rem 0' }}>“Go for East Quad if you want the social scene — but Dana is more chill.”</p>
          <div style={{ fontSize: '0.9rem', color: '#777' }}>
            Answered by <strong>Colby '26</strong> • <span>↑ 14</span>
          </div>
        </div>

        {/* Q2 */}
        <div style={{ marginBottom: '1.5rem', padding: '1rem', border: '1px solid #eee', borderRadius: '6px' }}>
          <p style={{ fontWeight: 'bold' }}>How hard are intro econ classes?</p>
          <p style={{ margin: '0.5rem 0' }}>“Econ 133 was fine as long as you stay on top of lectures. Problem sets pile up.”</p>
          <div style={{ fontSize: '0.9rem', color: '#777' }}>
            Answered by <strong>Colby '25</strong> • <span>↑ 9</span>
          </div>
        </div>

      </div>
    </div>
  );
}
