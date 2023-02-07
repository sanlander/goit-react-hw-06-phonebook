import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const DivInfo = styled.div`
  display: inline-flex;
  align-items: center; ;
`;

export const DeleteBtn = styled.button`
  margin-left: 100px;
  padding: 4px 10px;
  border: 2px solid rgb(255 99 71 / 50%);
  border-radius: 8px;
  cursor: pointer;
  transition: all 250ms;
  background-color: rgb(255 99 71 / 50%);

  :hover {
    color: #ffffff;
    background-color: rgb(255 99 71 / 100%);
  }
`;

export const ItemNumber = styled.span`
  font-weight: 500;
  margin-right: 20px;
  display: flex;
  height: 25px;
  border: 1px solid tomato;
  width: 25px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: #ffffff;
  background-color: rgb(255 99 71 / 70%);
`;
