const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-4"
      style={{ minHeight: "450px" }}
    >
      <img
        src={
          src
            ? src
            : "https://placehold.jp/40px/000000/ffffff/354x200.png?text=News%20...%0A"
        }
        style={{ height: "200px", objectFit: "cover" }}
        className="card-img-top"
        alt="news"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title" style={{ minHeight: "3.6rem" }}>
          {title}
        </h5>
        <p
          className="card-text flex-grow-1"
          style={{
            minHeight: "3rem",
            maxHeight: "6rem",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {description ? description.slice(0, 150) : ""}
        </p>
        <a
          href={url}
          className="btn btn-primary mt-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
