import GraphGallery from '../components/GraphGallery';

export default function Home() {
  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '2rem' }}>
        Shay in Graphs
      </h1>
      <div style={{ background: '#f7fafc', padding: '1.5rem', borderRadius: 8, marginBottom: '2rem' }}>
        <p style={{ fontSize: '1.2rem', color: '#444' }}>
          Hey! I'm Shay. Loves graphs.<br />
          Welcome to the Shay in Graphs project! This site presents a gallery of interactive, fun, and insightful graphs. Use the Add New Graph page to contribute your own data visualizations.
        </p>
      </div>
      <div>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Graph Gallery</h2>
        <GraphGallery />
      </div>
    </div>
  );
} 