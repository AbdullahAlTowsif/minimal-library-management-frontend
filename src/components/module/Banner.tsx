import { Link } from "react-router";
import bannerpic from "../../assets/books-imagination-still-life.jpg";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-[80vh]"
        style={{
          backgroundImage: `url(${bannerpic})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Discover Your Next Adventure</h1>
            <p className="mb-5">
              Explore our vast collection of books, from timeless classics to
              modern bestsellers. Manage your reading journey, track borrowed
              books, and discover new worlds with our intuitive library system.
            </p>
            <Link to="/borrow-summary" className="btn btn-primary">Borrowed Books</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
