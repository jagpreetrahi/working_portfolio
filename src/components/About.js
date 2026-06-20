import { stickyNotes } from "./content";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-tag">01 / the lowdown</div>
      <h2>
        A few sticky notes <span className="accent">about me</span>
      </h2>
      <div className="notes-board">
        {stickyNotes.map((note) => (
          <div className="sticky" key={note.label}>
            <b>{note.label}</b>
            {note.text}
          </div>
        ))}
      </div>
    </section>
  );
}
