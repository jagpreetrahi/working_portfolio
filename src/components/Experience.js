import experience from "@/data/experience.json";

function formatTimeline(startDate, endDate) {
  const fmt = (d) => {
    const [year, month] = d.split("-");
    const date = new Date(Number(year), Number(month) - 1);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };
  const start = fmt(startDate);
  const end = endDate ? fmt(endDate) : "Present";
  return `${start} — ${end}`;
}

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="section-tag">02 / where I&apos;ve worked</div>
      <h2>
        Work <span className="accent">experience</span>
      </h2>
      <div className="experience-list">
        {experience.map((job) => (
          <div className="experience-card" key={job.id}>
            <div className="experience-main">
              <h3>{job.title}</h3>
              <div className="experience-company">{job.company}</div>
              <div className="experience-location">{job.location}</div>
              <p className="experience-summary">{job.summary}</p>
              <div className="stack-pills">
                {job.stack.map((tech) => (
                  <span className="pill" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <span
              className={`experience-timeline${job.endDate ? "" : " current"}`}
            >
              {formatTimeline(job.startDate, job.endDate)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}