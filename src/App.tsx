import { useEffect, useState } from "react";
import * as C from "./app.styled";
import { InfoArea } from "./shared/components/InfoArea";
import { TableArea } from "./shared/components/TableArea";
import { categories } from "./shared/data/categories";
import { items } from "./shared/data/items";
import { filterByMonth, getCurrentMonth } from "./shared/helpers/dateFilter";
import { Item } from "./shared/types/Item";

export const App = () => {
  const [list, setList] = useState(items);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  return (
    <C.Container>
      <C.Header>
        <C.TextHeader>Sistema Financeiro</C.TextHeader>
      </C.Header>
      <C.Body>
        {/*Área de informações */}
        <InfoArea
          expense={expense}
          income={income}
          onMonthChange={handleMonthChange}
          currentMonth={currentMonth}
        />

        {/*Área de inserção */}

        {/*Tabela de itens */}
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
};
