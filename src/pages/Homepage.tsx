import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="flex justify-center item-center  bg-purple-700 w-full h-screen">
      <div className="bg-blue-600 w-[50%] h-[50vh] flex justify-center item-center flex-col text-center">
        <h1 className="mb-6 text-6xl">Quizzy App</h1>

        <Link
          to="/question"
          className="bg-yellow-200 h-12 w-40 mx-auto font-black-500 hover:bg-amber-400 text-md font-bold flex justify-center items-center"
        >
          Click To Start Quiz
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
