import { useLocation, useNavigate } from "react-router-dom";

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { score = 0 } = location.state || {};

  return (
    <section className="bg-blue-400 flex item-center justify-center   w-full h-screen">
      <div className="bg-red-400 w-[40%] h-[40%] flex flex-col items-center justify-center  ">
        <h1 className="font-bold text-4xl">Quiz Submitted</h1>
        <h2>
          YOur Score is{" "}
          <span className="text-green-100 text-3xl font-semibold">{score}</span>
        </h2>
        <button className="bg-green-400 text-white font-medium w-30 text-md  h-12 mt-4 text-center rounded">
          Restart Quiz
        </button>
      </div>
    </section>
  );
};

export default ResultPage;
