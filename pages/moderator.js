import Head from 'next/head';
import { useState } from 'react';

const mockQuestions = [
  {
    id: 1,
    question: 'What are dorms like at Bowdoin?',
    submittedAt: '2025-05-24',
    answered: false,
    verified: true,
    answer: 'They’re pretty cozy! Mostly singles and doubles.',
  },
  {
    id: 2,
    question: 'Is there a party scene at Colby?',
    submittedAt: '2025-05-25',
    answered: false,
    verified: false,
    answer: '',
  },
];

export default function ModeratorDashboard() {
  const [questions, setQuestions] = useState(mockQuestions);

  const handleAction = (id, action) => {
    console.log(`Performing ${action} on question ${id}`);
    setQuestions(questions.filter((q) => q.id !== id));
  };

  return (
    <>
      <Head>
        <title>Moderator Dashboard | InsideCampus</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Moderate questions and answers submitted to InsideCampus school hubs." />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css" />
      </Head>
      <main className="container">
        <h2>Moderator Dashboard</h2>
        <p>Review and manage incoming questions and answers.</p>
        <div className="grid">
          {questions.map((q) => (
            <article key={q.id}>
              <h3>❓ {q.question}</h3>
              <small>Submitted: {q.submittedAt}</small>
              <p>{q.answer ? <em>{q.answer}</em> : <em>No answer yet.</em>}</p>
              <p>{q.verified && <span style={{ backgroundColor: '#cde4ff', color: '#1c5fa1', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>✅ Verified Student</span>}</p>
              <div className="grid">
                <button onClick={() => handleAction(q.id, 'approve')}>✅ Approve</button>
                <button onClick={() => handleAction(q.id, 'reject')} className="secondary">❌ Reject</button>
                <button onClick={() => handleAction(q.id, 'flag')} className="contrast">🚩 Flag</button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  );
}
