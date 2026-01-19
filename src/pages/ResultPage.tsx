import { useLocation, useNavigate } from "react-router-dom";

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { score = 0 } = location.state || {};

  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-100 px-4  ">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg flex flex-col items-center justify-center p-8 text-center">
        <h1 className="font-bold text-3xl text-slate-800 mb-4">Quiz Submitted</h1>
        <p className="text-lg text-slate-600 mb-6">
          Your Score is{" "}
          <span className="text-blue-600 text-3xl font-semibold">{score}</span>
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 rounded-lg font-medium text-white
            bg-blue-600 hover:bg-blue-700 hover:text-blue-100
            transition-all duration-200"
        >
          Restart Quiz
        </button>
      </div>
    </section>
  );
};

export default ResultPage;
