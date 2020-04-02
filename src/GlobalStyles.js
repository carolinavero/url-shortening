import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle `

    @import url('https://fonts.googleapis.com/css?family=Poppins:500,700&display=swap');

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      overflow-x: hidden;

    }

    :root {
      --primary-color: hsl(180, 66%, 49%); /* Cyan */
      --secondary-color: hsl(257, 27%, 26%); /* Dark Violet */

      --alert-color: hsl(0, 87%, 67%);

      --gray: hsl(0, 0%, 75%);
      --grayish-violet: hsl(257, 7%, 63%);
      --dark-blue: hsl(255, 11%, 22%);
      --very-dark-violet: hsl(260, 8%, 14%);

      --dark: #232026;

    }

    body {
      font-family: 'Poppins', sans-serif;
      font-weight: 500;
      font-size: 18px;
      display: flex;
      flex-direction: column;
      background-color: #f0f1f6;

    }

    h1 {
      color: #333;
      line-height: 50px;
      margin-top: 1rem;
    }
    p {
      margin-top: 1rem;
      color: var(--gray)
    }
    .button {
      margin: 0.5em 1em;
      padding: 0.25em 1em;
      font-size: 18px;
      cursor: pointer;
      opacity: 1;
    }
    .button:hover {
      opacity: .7;
    }
    button:focus {
      outline: none;
    }

    .primary-button {
      border-radius: 50px;
      background: var(--primary-color);;
      border: 1px solid var(--primary-color);
      color: #fff;
      opacity: 1;
      font-size: 18px;
      font-weight: 600;
      padding: 1rem 2rem;
    }
  
    .secondary-button {
      border-radius: 10px;
      background: var(--primary-color);;
      border: 1px solid var(--primary-color);
      color: #fff;
      opacity: 1;
    }

    input {
      padding: 10px;
      height: 52px;
      width: 100%;
      border-radius: 5px;
      font-size: 18px;
      border: none;
      outline: none;
      .alert-danger {
        border: 2px solid var(--alert-color);
      }
    }

    .img-fluid {
      max-width: 100%;
    }
    .img-main {
      max-width: 150%;
    }

    @media(min-width: 768px) {
      h1 {
        font-size: 4rem;
        line-height: 90px;
      }

      .button {
        margin: 0.5em 0;
      }

    }

`;

export default GlobalStyle;

