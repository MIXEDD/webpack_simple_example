require('../css/style.css');
import people from './people';
const $ = require('jquery');


 $.each(people, function (key,value) {
     $('body').append('<h1>'+people[key].name+'</h1>');
 });

console.log(people[0]);