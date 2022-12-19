import { useState } from "react";
import { categories } from "../../data/categories";
import { newDateAdjusted } from "../../helpers/dateFilter";
import { Item } from "../../types/Item";
import * as C from "./style";

type Props = {
  handleAddItem: (item: Item) => void;
};

export const InputArea = ({ handleAddItem }: Props) => {
  const [currentMes, setCurrentMes] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [currentTitle, setCurrentTitle] = useState("");
  const [currentValue, setCurrentValue] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    let errors: string[] = [];

    if(isNaN(new Date(currentMes).getTime())) {
      errors.push('Data inválida!');
    }
    if(!categoryKeys.includes(currentCategory)) {
      errors.push('Categoria inválida!');
    }
    if(currentTitle === '') {
      errors.push('Título vazio!');
    }
    if(currentValue <= 0) {
      errors.push('Valor inválido!');
    }
    if(errors.length > 0) {
      alert(errors.join('\n'));
    } else {
      handleAddItem({
        data: newDateAdjusted(currentMes),
        category: currentCategory,
        title: currentTitle,
        value: currentValue,
      });
      clearFields();
    }
  }

  const clearFields = () => {
    setCurrentMes('');
    setCurrentCategory('');
    setCurrentTitle('');
    setCurrentValue(0);
  }

  return (
    <C.Container>
        <C.InputLabel>
          <C.InputTitle>Data</C.InputTitle>
          <C.Input type="date" value={currentMes} onChange={e => setCurrentMes(e.target.value)} />
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Categoria</C.InputTitle>
          <C.Select value={currentCategory} onChange={e => setCurrentCategory(e.target.value)}>
            <>
              <option></option>
              {categoryKeys.map((key, index) => (
                <option key={index} value={key}>{categories[key].title}</option>
              ))}
            </>
          </C.Select>
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Título</C.InputTitle>
          <C.Input type="text" value={currentTitle} onChange={e => setCurrentTitle(e.target.value)} />
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>Valor</C.InputTitle>
          <C.Input type="number" value={currentValue} onChange={e => setCurrentValue(parseFloat(e.target.value))} />
        </C.InputLabel>
        <C.InputLabel>
          <C.InputTitle>&nbsp;</C.InputTitle>
          <C.Button onClick={handleAddEvent}>Adicionar</C.Button>
        </C.InputLabel>
      </C.Container>
  );
};
