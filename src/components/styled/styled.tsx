import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const Card = styled.div`
  padding: 18px 20px;
  border-radius: 8px;
  background-color: white;

  @media (prefers-color-scheme: dark) {
    background-color: #111;
  }
`;

export const FlexBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const FlexBoxCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
`;

export const Button = styled.button`
  background-color: ${(props) =>
    props.disabled ? "#6e6e6e" : "var(--tg-theme-button-color)"};
  border: 0;
  border-radius: 8px;
  padding: 10px 20px;
  color: var(--tg-theme-button-text-color);
  font-weight: 700;
  cursor: pointer;
  pointer-events: ${(props) => (props.disabled ? "none" : "inherit")};
`;

export const Ellipsis = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Input = styled("input")`
  padding: 10px 20px;
  border-radius: 10px;
  width: 100%;
  border: 1px solid #c2c2c2;

  @media (prefers-color-scheme: dark) {
    border: 1px solid #fefefe;
  }
`;

export const GlobalStyle = createGlobalStyle`
  /* Общие стили */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
  }

  /* Стили для ImageGrid */
 .grid {
    display: grid;
    grid-template-columns: repeat(5, minmax(120px, 1fr));
    gap: 15px;
  }

 .grid > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    padding: 16px; /* reduce padding to 8px on smaller screens */
  }

 .grid img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    max-width: 100%;
    object-fit: cover;
    margin: 0; /* remove margin */
  }

 .grid p {
  font-size: 0.8em; /* текст будет иметь размер 0.8em от родительского элемента */
  margin-bottom: 0.5em;
  color: #000;
  }

 .grid.font-bold {
    font-weight: bold;
  }

 .buy-button {
    display: block;
    margin: 0 auto;
    background-color: #7A288A; /* фиолетовый цвет */
    color: #FFFFFF; /* белый текст */
    border: none;
    border-radius: 10px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    width: 100%; /* make button full-width */
  }

 .buy-button:hover {
    background-color: #6c2277; /* темнее фиолетовый цвет при наведении */
  }

  @media (max-width: 768px) {
   .grid {
      grid-template-columns: repeat(3, minmax(100px, 1fr));
      gap: 13px; /* reduce gap */
    }
   .grid > div {
      padding: 8px; /* reduce padding */
    }
   .buy-button {
      padding: 8px 16px; /* reduce padding */
      font-size: 14px; /* reduce font size */
    }
      .grid p {
    font-size: 0.6em; /* уменьшаем размер текста на smaller screens */
    }
  }
`;









