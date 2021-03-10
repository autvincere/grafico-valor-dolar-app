const cors_anywhere = '';
// const cors_anywhere = 'https://cors-anywhere.herokuapp.com/';
const base_url = 'https://api.sbif.cl/api-sbifv3/recursos_api/';
const api_key = '?apikey=bcab1f6493785dc221a83db5d7cc6d3cbd6525d0';
const format = '&formato=json'

export const dayDateValue = (financialUnit) => `${cors_anywhere}${base_url}${financialUnit}${api_key}${format}`

export const yearDateValue = (financialUnit,ano) => `${cors_anywhere}${base_url}${financialUnit}/${ano}${api_key}${format}`


export const oneDateValue = ( financialUnit,year,month,day ) => `${cors_anywhere}${base_url}${financialUnit}/${year}/${month}/${day}${api_key}${format}`;

// https://api.sbif.cl/api-sbifv3/recursos_api/dolar/periodo/2010/01/dias_i/04/2010/01/dias_f/05?apikey=SBIF9990SBIF44b7SBIF7f4c5a537d02358e1099&formato=xml
export const twoDatesValue = ( financialUnit, yearStart,monthStart,dayStart,yearEnd,monthEnd,dayEnd ) => `${cors_anywhere}${base_url}${financialUnit}/periodo/${yearStart}/${monthStart}/dias_i/${dayStart}/${yearEnd}/${monthEnd}/dias_f/${dayEnd}${api_key}${format}`; 
