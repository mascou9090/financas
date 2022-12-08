import { useEffect, useState } from 'react';
import * as C from './app.styled';
import { TableArea } from './shared/components/TableArea';
import { items } from './shared/data/items';
import { filterByMonth, getCurrentMonth } from './shared/helpers/dateFilter';
import { Item } from './shared/types/Item';





export const App = () => {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList(filterByMonth(list, currentMonth));
  },[list, currentMonth])
  
  return (
    <C.Container>
      <C.Header>
        <C.TextHeader>Sistema Financeiro</C.TextHeader>
      </C.Header>
      <C.Body>
        {/*Área de informações */}

        {/*Área de inserção */}
        
        {/*Tabela de itens */}
        <TableArea list={filteredList}/>
      
      </C.Body>
    </C.Container>
  );
}
