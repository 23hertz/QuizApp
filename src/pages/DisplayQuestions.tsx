import { useState } from "react";
import NextButton from "./NextButton";
import Choices from "./Choices";
import { useNavigate } from "react-router-dom";
import type { Question } from "../types/question";

 type Props = {
   qBanks: Question[];
 };

const DisplayQuestions = ({ qBanks }:Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedAns, setSelectedAns] = useState<string | null>(null);
  const [score, setScore] = useState<number>(0);

  const navigate = useNavigate();
  let currentQuestion = qBanks[currentIndex];
  const isLastQuestion = currentIndex === qBanks.length - 1;
  let totalQuestion = qBanks.length;
  let getPercentage = ((currentIndex + 1) / totalQuestion) * 100;

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
    <div className="bg-slate-100 w-full min-h-screen flex items-center justify-center">
      <div className="bg-white w-full max-w-lg mx-4 rounded-xl shadow-lg flex flex-col">
        <header className="border-b align-center p-4">
          <div className="">
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full  transition-all duration-300 ease-out bg-blue-600"
                style={{ width: `${getPercentage}%` }}
              />
            </div>
          </div>

          <div className="flex flex-row justify-between gap-4 ">
            <h3>
              Score <span className="text-xl font-bold">{score}</span>
            </h3>
            <h3 className="text-right">{currentQuestion.id}/10</h3>
          </div>
        </header>
        <div>
          <ul>
            <li className="text-center text-lg font-semibold px-6 py-4">
              {currentQuestion.question}
            </li>

            {currentQuestion.choices.map((choice: string, index: number) => (
              <Choices
                key={index}
                // index={index}
                choice={choice}
                selectedAns={selectedAns}
                onSelect={setSelectedAns}
              />
            ))}
          </ul>
        </div>

        <footer className="text-white border-b p-4 flex justify-end">
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
