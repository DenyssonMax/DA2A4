import {cep} from './modules/Apicep';
cep = require('./modules/Apicep')
import covid from './modules/Apicovid';
covid = require('./modules/Apicovid')
import mascara from './modules/mascara.js';
mascara = require('./modules/mascara')

document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  cep.clearUl();
  const uf = await cep.cepToState();
  covid.returnResults(uf);
});