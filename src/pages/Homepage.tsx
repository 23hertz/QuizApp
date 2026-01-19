import { Link } from "react-router-dom";
const Homepage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center  bg-slate-100 px-4">
      <div className="bg-white w-full max-w-md rounded-xl flex flex-col shadow-lg p-8 text-center">
        <h1 className="mb-6 text-4xl font-bold text-slate-800">Quizzy App</h1>

        <Link
          to="/question"
          className="inline-flex items-center justify-center h-12 w-48 mx-auto bg-blue-600 text-white rounded-lg transition-all duration-200 hover:bg-blue-700 hover:text-blue text-md font-semibold"
        >
          Click To Start Quiz
        </Link>
      </div>
    </div>
  );
};

export default Homepage;
