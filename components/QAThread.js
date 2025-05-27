export default function QAThread({ question, answers }) {
  return (
    <article style={{ border: '1px solid #e0e0e0', padding: '2rem', borderRadius: '8px', marginBottom: '2rem' }}>
      <header style={{ marginBottom: '1rem' }}>
        <h3 style={{ marginBottom: '0.5rem' }}>❓ {question}</h3>
      </header>
      {answers?.length > 0 ? (
        answers.map((answer, idx) => (
          <div key={idx} style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#dde3ea',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '1rem',
              }}
            >
              {answer.userInitials || '👤'}
            </div>
            <div style={{ flex: 1 }}>
              <p style={{ marginBottom: '0.25rem' }}>{answer.text}</p>
              <small>
                {answer.isVerified && (
                  <span style={{ backgroundColor: '#cde4ff', color: '#1c5fa1', padding: '0.15rem 0.5rem', borderRadius: '4px', marginRight: '0.5rem' }}>
                    ✅ Verified Student
                  </span>
                )}
                <span>{answer.timestamp}</span>
              </small>
            </div>
          </div>
        ))
      ) : (
        <p>No answers yet. Be the first to respond.</p>
      )}
    </article>
  );
}
