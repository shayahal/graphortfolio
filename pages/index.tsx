import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import GraphGallery from '../components/GraphGallery';

export default function Home() {
  const [notes, setNotes] = useState('');

  useEffect(() => {
    fetch('/notes.md')
      .then(res => res.text())
      .then(setNotes);
  }, []);

  // Only show notes if they are valid markdown, not an HTML error page
  const isValidNotes = notes && !notes.startsWith('<!DOCTYPE');

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}>
        Shay in Graphs
      </h1>
      <div style={{ background: '#f7fafc', padding: '1.5rem', borderRadius: 8, marginBottom: '2rem' }}>
        {isValidNotes ? (
          <ReactMarkdown>{notes}</ReactMarkdown>
        ) : (
          <div style={{ color: '#888', fontStyle: 'italic' }}>Welcome! (Notes could not be loaded.)</div>
        )}
      </div>
      <div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Graph Gallery</h2>
        <GraphGallery />
      </div>
    </div>
  );
} 