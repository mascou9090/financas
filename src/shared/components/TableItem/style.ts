import styled from 'styled-components';


export const TableLine = styled.tr``;

export const TableColumn = styled.td`
  padding: 1rem 0.8rem;
`;

export const Category = styled.div<{ color: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  background-color: ${props => props.color};
`;

export const Value = styled.div<{ color: string }>`
  color: ${props => props.color}
`;