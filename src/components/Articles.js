import articles from "@/data/articles.json";

export default function Articles() {
  return (
    <section className="section" id="articles">
      <div className="section-tag">04 / things I&apos;ve written</div>
      <h2>
        Selected <span className="accent">articles</span>
      </h2>
      <div className="articles-grid">
        {articles.map((article) => (
          <a
            className="article-card"
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className="article-image-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={article.image} alt={article.title} loading="lazy" />
            </div>
            <div className="article-body">
              <div className="article-meta">{article.publication}</div>
              <h3>{article.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}