import "./App.css";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import DisplayQuestions from "./pages/DisplayQuestions";
import ResultPage from "./pages/ResultPage";
import type { Question } from "./types/question";
// type Question = {
//   id: number;
//   question: string;
//   choices: string[];
//   correctAnswer: string;
// };

function App() {
  const questionBank:Question[] =[
    {
      id: 1,
      question:
        "Which of the following tag is used to make the underlined text?",
      choices: ["<i>", "<ul>", "<u>", "<pre>"],

      correctAnswer: "<u>",
    },
    {
      id: 2,
      question: " Which is the correct CSS syntax?",
      choices: [
        "body {color: black}",
        "{body;color:black}",
        "{body:color=black(body}",
        "body:color=black",
      ],
      correctAnswer: "body {color: black}",
    },
    {
      id: 3,
      question:
        "Which of the following keywords is used to define a variable in Javascript?",
      choices: ["var", "let", "var and let", "None of the above"],
      correctAnswer: "var and let",
    },

    {
      id: 4,
      question:
        "Which of the following tag is used to define options in a drop-down selection list?",
      choices: ["<select>", "<list>", "<dropdown>", "<option>"],

      correctAnswer: "<option>",
    },

    {
      id: 5,
      question:
        "Which of the following CSS Property controls how an element is positioned?",
      choices: ["static", "position", "fix", "set"],

      correctAnswer: "position",
    },

    {
      id: 6,
      question: "How can a datatype be declared to be a constant type?",
      choices: ["const", "var", "let", "constant"],

      correctAnswer: "const",
    },

    {
      id: 7,
      question:
        "Which character is used to represent the closing of a tag in HTML?",
      choices: ["\\", "!", "/", "."],

      correctAnswer: "/",
    },

    {
      id: 8,
      question: "In CSS, “font-size” can be called as?",
      choices: ["Selector", "Rule", "Property", "Property-Name"],

      correctAnswer: "Property-Name",
    },

    {
      id: 9,
      question:
        "Which of the following methods can be used to display data in some form using Javascript?",
      choices: [
        "document.write()",
        "console.log()",
        "window.alert",
        "All of the above",
      ],

      correctAnswer: "All of the above",
    },
    {
      id: 10,
      question:
        "Which of the following HTML tag is used to create an unordered list?",
      choices: ["<ol>", "<ul>", "<li>", "<ll>"],
      correctAnswer: "<ul>",
    },
  ];

  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
     
             <Route
          path="/question"
          element={<DisplayQuestions qBanks={questionBank} />}
        />
        <Route path="/ResultPage" element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
