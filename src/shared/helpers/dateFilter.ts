import { Item } from "../types/Item";

export const getCurrentMonth = () => {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const filterByMonth = (list: Item[], date: string): Item[] => {
  const newList: Item[] = [];

  const [year, month] = date.split('-');
  console.log('Ano:'+year);
  console.log('Mes:'+month);

  for (let i in list) {
    if (
      list[i].data.getFullYear() === parseInt(year) &&
      list[i].data.getMonth() === parseInt(month)
    ) {
      newList.push(list[i]);
    }
  }
  return newList;
};
