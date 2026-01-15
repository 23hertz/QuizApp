type Props = {
  choice: string;
  selectedAns: string | null;
  onSelect: (index: string) => void;

  
};

const Choices = ({
  choice,
  selectedAns,
  onSelect,
  

}: Props) => {

  return (
    <li
      className={`py-2 cursor-pointer text-center
               ${
                 selectedAns === choice
                   ? "bg-white border-2 border-blue-600"
                   : "bg-yellow-400 hover:bg-white"
               }
             `}
      onClick={() => onSelect(choice)}
    >
      {choice}
    </li>
  );
};

export default Choices;
