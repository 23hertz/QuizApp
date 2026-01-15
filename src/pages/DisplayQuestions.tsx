import { useState } from "react";
import NextButton from "./NextButton";
import Choices from "./Choices";
import { useNavigate } from "react-router-dom";

type Props = {
  qBanks: Question[];
};

const DisplayQuestions = ({ qBanks }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAns, setSelectedAns] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);

  const navigate = useNavigate();
  let currentQuestion = qBanks[currentIndex];
  const isLastQuestion = currentIndex === qBanks.length - 1;

  const handleNext = () => {
    if (!selectedAns) return;

    let updatedScore = score;

    if (selectedAns === currentQuestion.correctAnswer) {
      updatedScore += 5;
      setScore(updatedScore);
    }

    if (isLastQuestion) {
      navigate("/ResultPage", {
        state: { score: updatedScore },
      });
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAns(null);
    }
  };

  return (
    <div className="bg-blue-300 w-full h-screen flex items-center justify-center">
      <div className="bg-yellow-100 w-[40%] h-[40%] flex flex-col justify-between ">
        <header className="flex flex-row justify-between align-center bg-green-400 p-2">
          <div className="flex flex-row gap-4">
            <h3>Score</h3>
            <h2 className="text-xl font-bold">{score}</h2>
          </div>
          <h3 className="text-right">{currentQuestion.id}</h3>
        </header>
        <ul>
          <li className="text-center text-xl p-2">
            {currentQuestion.question}
          </li>

          {currentQuestion.choices.map((choice: string, index: number) => (
            <Choices
              key={index}
              index={index}
              choice={choice}
              selectedAns={selectedAns}
              onSelect={setSelectedAns}
            />
          ))}
        </ul>

        <footer className="text-right bg-blue-600 text-white">
          <NextButton
            onNext={handleNext}
            text={isLastQuestion ? "Submit" : "Next"}
            disabled={!selectedAns}
          />
        </footer>
      </div>
    </div>
  );
};

export default DisplayQuestions;
