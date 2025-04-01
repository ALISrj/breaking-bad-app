import './style.css'
import breakingBad from './breaking-bad.svg'
import viteLogo from '/vite.svg'
import {BreakingbadApp} from "./breakingbad/breakingbad-app.js";


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${breakingBad}" class="logo vanilla" alt="Breaking Bad logo" />
    </a>
    <h1 id="app-tittle">Hello Vite!</h1>
    <div class="card">
    
    </div>
    
  </div>
`;

const element = document.querySelector('.card');

BreakingbadApp(element);

