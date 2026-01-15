type Props = {
  onNext: () => void;
  text: string;
  disabled?: boolean;
};

const NextButton = ({ onNext, text, disabled = false }: Props) => {
  const isSubmit = text === "Submit";
  return (
    <button
      className={`text-right p-2 
    ${
      isSubmit
        ? "bg-green-600 hover:bg-green-700"
        : "bg-blue-900 hover:bg-blue-800"
    }
         ${disabled ? "opacity-50 cursor-not-allowed" : ""}
    `}
      onClick={onNext}
    >
      {text}
    </button>
  );
};

export default NextButton;
