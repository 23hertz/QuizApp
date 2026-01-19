type Props = {
  choice: string;
  selectedAns: string | null;
  onSelect: (index: string) => void;
};

const Choices = ({ choice, selectedAns, onSelect }: Props) => {
  const isSelected = selectedAns === choice;
  return (
    <li
      role="button"
      tabIndex={0}
      className={`py-3 px-4 my-2 cursor-pointer text-center rounded-lg transition-all duration-200 ease-out
              
              ${
                isSelected
                  ? "bg-blue-50 border-2 border-blue-600 font-semibold"
                  : "bg-gray-100 hover:bg-gray-200"
              }     
               
             `}
      onClick={() => onSelect(choice)}
    >
      {choice}
    </li>
  );
};

export default Choices;
