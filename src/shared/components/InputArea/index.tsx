import { useState } from "react";
import * as C from "./style";

type Props = {
  handleAddItem: (
    date: Date,
    category: string,
    title: string,
    value: number
  ) => void;
};

export const InputArea = ({ handleAddItem }: Props) => {
  const [currentMes, setCurrentMes] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentValue, setCurrentValue] = useState(0);
  const [currentExpense, setCurrentExpense] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    const dataMesNow = new Date(currentMes)

    handleAddItem(dataMesNow, currentCategory, currentTitle, currentValue);
  };

  const handleClick = () => {
    setCurrentExpense(!false);
  };

  return (
    <C.Container>
      <form onSubmit={() => handleSubmit}>
        <input
          onChange={(e) => setCurrentMes(e.target.value)}
          type="text"
          name="mes"
          placeholder="yyyy/mm/dd"
          value={currentMes}
        />
        <input
          onChange={(e) => setCurrentCategory(e.target.value)}
          type="text"
          name="category"
          placeholder="Categoria"
          value={currentCategory}
        />
        <input
          onChange={(e) => setCurrentTitle(e.target.value)}
          type="text"
          name="title"
          placeholder="Título"
          value={currentTitle}
        />
        <input
          onChange={(e) => setCurrentValue(parseFloat(e.target.value))}
          type="text"
          name="value"
          placeholder="Valor"
          value={currentValue}
        />
        <label>Receita</label>
        <input
          className="radios"
          onClick={() => handleClick}
          type="checkbox"
          name="receita"
        />
        <button type="submit">Enviar</button>
      </form>
    </C.Container>
  );
};
