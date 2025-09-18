import { Link } from "react-router";

const Home = () => {
  return (
    <div className="h-screen flex">
      <div className="px-10 mx-auto w-1/2 h-full flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold uppercase pb-4">Welcome!</h1>
        <h3 className="text-2xl font-normal pb-7">
          Find your favorite book here
        </h3>
        <Link
          to="/books"
          className="my-2 w-40 text-center bg-amber-500/10 rounded-[10px] outline outline-amber-500 text-amber-500 text-base font-medium p-3 hover:shadow-lg"
        >
          Go to Book Page
        </Link>
      </div>
      <div className="w-1/2 h-full hero-bg">
        <img src="https://png.pngtree.com/png-clipart/20241001/original/pngtree-woman-reading-book-clip-art-illustration---png-image_16137436.png" alt="" className="h-full" />
      </div>
    </div>
  );
};

export default Home;
