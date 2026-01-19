type Props = {
  onNext: () => void;
  text: string;
  disabled?: boolean;
};

const NextButton = ({ onNext, text, disabled = false }: Props) => {
  const isSubmit = text === "Submit";
  return (
    <button
      disabled={disabled}
      className={`px-6 py-2 rounded-lg font-medium text-white transition-all duration-200 ease-out 
    ${
      isSubmit
        ? "bg-green-600 hover:bg-green-700 text-white hover:text-green-100"
        : "bg-blue-900 hover:bg-blue-800 text-white hover:text-blue-100"
    }
         ${
           disabled
             ? "opacity-50 cursor-not-allowed hover:bg-inherit"
             : ""
         }
    `}
      onClick={onNext}
    >
      {text}
    </button>
  );
};

export default NextButton;
